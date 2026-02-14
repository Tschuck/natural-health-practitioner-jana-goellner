import { defaultLocale } from '@/i18n/i18n';
import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';
import { usePageContext } from 'vike-react/usePageContext';

export interface LinkParams extends BaseComponentPropsWithChildren {
  href: string;
  locale?: string;
  activeClassName?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
  download?: string;
  target?: string;
}

export function Link({
  openInNewTab,
  href,
  activeClassName,
  children,
  locale: providedLocale,
  className,
  onClick,
  download,
  target,
}: LinkParams) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  const locale = providedLocale ?? pageContext.locale;
  if (locale !== defaultLocale) {
    href = '/' + locale + href;
  }

  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      className={classNames(className, isActive ? activeClassName : undefined)}
      {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download } : {})}
      {...(target && !openInNewTab ? { target } : {})}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
