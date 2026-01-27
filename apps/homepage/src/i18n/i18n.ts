import { i18n } from '@lingui/core';
import { usePageContext } from 'vike-react/usePageContext';

export const defaultLocale = 'de';
export const supportedLocales = ['de', 'en'];

export async function loadCatalog(locale: string) {
  const { messages } = (await import(`./locales/${locale}/messages.po`)) as {
    messages: Record<string, string>;
  };

  return messages;
}

export const activateLocaleMessages = (locale: string, messages: Record<string, string>) => {
  if (i18n.locale !== locale) {
    i18n.loadAndActivate({
      locale,
      messages,
    });
  }
};

export const useAppLocale = () => {
  const { locale, localeMessages } = usePageContext();
  activateLocaleMessages(locale, localeMessages);
};
