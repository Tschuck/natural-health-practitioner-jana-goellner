import Application from '@/app';
import { dynamicActivate } from '@/i18n';
import { renderToString } from 'react-dom/server';
import { HelmetServerState } from 'react-helmet-async';
import type { PageContextServer } from 'vite-plugin-ssr/types';

export async function render(pageContext: PageContextServer) {
  const url = pageContext.urlPathname || '/';
  const [, maybeLocale] = url.split('/');
  const locale = await dynamicActivate(maybeLocale ?? 'en');

  const helmetContext = {} as { helmet?: HelmetServerState };
  const html = renderToString(Application(helmetContext));

  // ---------------------------------------------------------------
  // f) Pull the generated <head> markup from Helmet
  // ---------------------------------------------------------------
  const { helmet } = helmetContext;
  const headTags = `
    ${helmet?.title.toString() ?? ''}
    ${helmet?.meta.toString() ?? ''}
    ${helmet?.link.toString() ?? ''}
  `;

  // ---------------------------------------------------------------
  // g) Inject a tiny script that passes the locale (and any other
  //    data you might need) to the client‑side entry.
  // ---------------------------------------------------------------
  const initialData = { locale };
  const serializedData = JSON.stringify(initialData).replace(/</g, '\\u003c');

  // ---------------------------------------------------------------
  // h) Assemble the final HTML document
  // ---------------------------------------------------------------
  const document = `
    <!DOCTYPE html>
    <html lang="${locale}">
      <head>
        <meta charset="UTF-8" />
        ${headTags}
        <script>
          // Make the locale (and any other bootstrap data) available to the client
          window.__INITIAL_DATA__ = ${serializedData};
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
        <!-- Vite‑SSR will automatically inject the correct client entry path -->
        <script type="module" src="/src/entry-client.tsx"></script>
      </body>
    </html>
  `;

  // ---------------------------------------------------------------
  // i) Return the HTTP response expected by Vite‑SSR
  // ---------------------------------------------------------------
  return {
    pageContext: {
      httpResponse: {
        statusCode: 200,
        contentType: 'text/html',
        body: document,
      },
    },
  };
}
