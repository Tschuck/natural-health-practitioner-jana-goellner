import { pageRoutes } from '@/general/router.component';
import { BaseComponentProps } from '@/general/types/component-props.type';
import { classNames } from '@/general/utils/utils';
import { Link, useLocation } from 'react-router-dom';

export function Navigation({ className }: BaseComponentProps) {
  const location = useLocation();

  return (
    <div className={classNames(className, 'flex gap-x-8 flex-wrap')}>
      {pageRoutes
        .filter((route) => !route.handle.hide)
        .map((route) => {
          const isActive = location.pathname === route.path;

          return (
            <Link
              to={route.path}
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
