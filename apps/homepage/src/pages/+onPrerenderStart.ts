import { defaultLocale, supportedLocales } from '@/i18n/i18n';
import { PageContext, PrerenderContext } from 'vike/types';

export function onPrerenderStart(prerenderContext: PrerenderContext) {
  const pageContexts: PageContext[] = [];

  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    supportedLocales.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext;
      if (locale !== defaultLocale) {
        urlOriginal = `/${locale}${pageContext.urlOriginal}`;
      }
      pageContexts.push({
        ...pageContext,
        urlOriginal,
        locale,
      } as unknown as PageContext);
    });
  });
  return {
    prerenderContext: {
      pageContexts,
    },
  };
}
