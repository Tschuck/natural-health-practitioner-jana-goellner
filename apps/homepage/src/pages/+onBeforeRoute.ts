export { onBeforeRoute };

import { activateLocaleMessages, defaultLocale, loadCatalog } from '@/i18n/i18n';
import { modifyUrl } from 'vike/modifyUrl';
import { PageContext, Url } from 'vike/types';

async function onBeforeRoute(pageContext: PageContext) {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlParsed);
  const messages = await loadCatalog(locale);
  activateLocaleMessages(locale, messages);

  return {
    pageContext: {
      // Make locale available as pageContext.locale
      locale,
      // Vike's router will use pageContext.urlLogical instead of pageContext.urlOriginal and
      // the locale is removed from pageContext.urlParsed
      urlLogical: urlWithoutLocale,

      localeMessages: messages,
    },
  };
}

function extractLocale(url: Url) {
  const { pathname } = url;

  // Determine the locale, for example:
  //  /en-US/film/42 => en-US
  //  /de-DE/film/42 => de-DE
  const languageMatch = pathname.match(/(\/)(de|en)/);
  const locale = languageMatch ? languageMatch[2] : defaultLocale;

  // Remove the locale, for example:
  //  /en-US/film/42 => /film/42
  //  /de-DE/film/42 => /film/42
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  // Reconstruct full URL
  const urlWithoutLocale = modifyUrl(url.href, { pathname: pathnameWithoutLocale });

  return { locale, urlWithoutLocale };
}
