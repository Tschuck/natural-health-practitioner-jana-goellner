import { i18n } from '@lingui/core';

export const defaultLocale = 'de';
export const supportedLocales = ['de', 'en'];

export async function dynamicActivate(locale: string) {
  const { messages } = (await import(`./locales/${locale}/messages.po`)) as {
    messages: Record<string, string>;
  };
  i18n.load(locale, messages);
  i18n.activate(locale);

  return locale;
}
