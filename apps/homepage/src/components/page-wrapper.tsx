import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export const PageWrapperSpace = {
  wide: 'wide',
} as const;
export type PageWrapperSpace = (typeof PageWrapperSpace)[keyof typeof PageWrapperSpace];

export interface PageWrapperProps extends BaseComponentPropsWithChildren {
  space?: PageWrapperSpace;
}

const spaceClassMap: Record<PageWrapperSpace, string> = {
  wide: 'lg:grid lg:gap-8 p-4 lg:px-16',
};

export function PageWrapper({ space = PageWrapperSpace.wide, className, children }: PageWrapperProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={classNames(className, spaceClassMap[space])}>{children}</div>
    </div>
  );
}
