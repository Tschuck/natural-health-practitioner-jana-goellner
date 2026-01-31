import { Button, ButtonType } from '@//components/button.component';
import { BaseComponentProps } from '@//types/component-props.type';
import { classNames } from '@//utils/utils';
import { Link } from '@/components/link';
import { navigationEntries } from '@/navigation-entries';
import { Trans } from '@lingui/react/macro';

export interface SidePanelProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidePanel({ className, isOpen, onClose }: SidePanelProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-gray-900 opacity-50 " onClick={onClose} />
          <div
            className={classNames(
              className,
              'fixed bg-white top-0 bottom-0 right-0 flex flex-col z-20 p-4 shadow-lg w-4/5 font-inter'
            )}
          >
            {navigationEntries.map((route) => {
              const isActive = location.pathname === route.path;

              return (
                <Link
                  href={route.path}
                  className={classNames(
                    'flex relative py-4 cursor-pointer items-center justify-center text-gray-800 rounded-lg',
                    isActive ? 'bg-primary text-white' : ''
                  )}
                  key={route.path}
                  onClick={onClose}
                >
                  <span className="text-center text-nowrap">
                    <Trans>{route.name}</Trans>
                  </span>
                </Link>
              );
            })}

            <div className="flex-grow" />
            <div className="flex items-center justify-center mt-4">
              <Button type={ButtonType.ACTION} onClick={onClose}>
                <Trans>Schließen</Trans>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
