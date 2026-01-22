import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React from 'react';
import { renderToString } from 'react-dom/server';
import type { PageContextServer } from 'vike/types';

export { onRenderHtml };

function onRenderHtml(pageContext: PageContextServer) {
  const { Page } = pageContext;
  const PageView = Page as React.ComponentType;

  console.log('on render html');

  const pageHtml = renderToString(
    <I18nProvider i18n={i18n}>
      <PageView />
    </I18nProvider>
  );

  console.log(pageHtml);

  return {
    documentHtml: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Heilpraktikerin Jana Goellner</title>
        </head>
        <body>
          <div id="page-view">${pageHtml}</div>
        </body>
      </html>
    `,
  };
}
