import { Link } from '@/components/link';
import { navigationEntries } from '@/navigation-entries';
import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export function Navigation({ className }: BaseComponentProps) {
  return (
    <div className={classNames(className, 'flex gap-x-8 flex-nowrap')}>
      {navigationEntries.map((route) => {
        return (
          <Link
            href={route.path}
            className={classNames(
              'flex relative cursor-pointer items-center justify-center font-inter text-gray-800 text-md'
            )}
            activeClassName="font-bold text-primary"
            key={route.path}
          >
            <span className="text-center text-nowrap">{route.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
