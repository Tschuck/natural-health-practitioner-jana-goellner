import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export type PageWrapperProps = BaseComponentPropsWithChildren;

export function PageWrapper({ className, children }: PageWrapperProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={classNames(className, 'p-4 lg:px-16 xl:px-32 text-hjg-dark-green container')}>{children}</div>
    </div>
  );
}
