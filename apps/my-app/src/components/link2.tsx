import { defaultLocale } from '@/i18n/i18n';
import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';
import { usePageContext } from 'vike-react/usePageContext';

export interface LinkParams extends BaseComponentPropsWithChildren {
  href: string;
  locale?: string;
}

export function Link({ href, children, locale: providedLocale, className }: LinkParams) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  const locale = providedLocale ?? pageContext.locale;
  if (locale !== defaultLocale) {
    href = '/' + locale + href;
  }

  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a href={href} className={classNames(className, isActive ? 'is-active' : undefined)}>
      {children}
    </a>
  );
}
