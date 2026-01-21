import { Link } from '@/components/link2';
import { pageRoutes } from '@/router.component';
import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export function Navigation({ className }: BaseComponentProps) {
  return (
    <div className={classNames(className, 'flex gap-x-8 flex-wrap')}>
      {pageRoutes
        .filter((route) => !route.handle.hide)
        .map((route) => {
          const isActive = location.pathname === route.path;

          return (
            <Link
              href={route.path}
              className={classNames(
                'flex relative cursor-pointer items-center justify-center font-inter text-gray-800 text-md',
                isActive ? 'font-bold text-primary' : ''
              )}
              key={route.path}
            >
              <span className="text-center text-nowrap">{route.handle.name}</span>
            </Link>
          );
        })}
    </div>
  );
}
