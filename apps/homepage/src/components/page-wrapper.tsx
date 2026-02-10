import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export const PageWrapperSpace = {
  narrow: 'narrow',
  wide: 'wide',
} as const;
export type PageWrapperSpace = (typeof PageWrapperSpace)[keyof typeof PageWrapperSpace];

export interface PageWrapperProps extends BaseComponentPropsWithChildren {
  space?: PageWrapperSpace;
}

const spaceClassMap: Record<PageWrapperSpace, string> = {
  narrow: 'p-8 lg:px-16 xl:px-32 text-hjg-dark-green container mb-16',
  wide: 'p-8 lg:px-16 xl:px-32 text-hjg-dark-green mb-16',
};

export function PageWrapper({ space = PageWrapperSpace.wide, className, children }: PageWrapperProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={classNames(className, spaceClassMap[space])}>{children}</div>
    </div>
  );
}
