import { dynamicActivate } from '@/i18n/i18n';
import { PageContext } from 'vike/types';

export async function onBeforeRender(pageContext: PageContext) {
  const { locale } = pageContext;
  const messages = await dynamicActivate(locale);

  // here you can e.g. translate head metadata

  return {
    pageContext: {
      messages,
    },
  };
}
