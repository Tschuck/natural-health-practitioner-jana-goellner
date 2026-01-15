import { pageRoutes } from '@/general/router.component';
import { Button, ButtonType } from '@/general/components/button.component';
import { BaseComponentProps } from '@/general/interfaces/component-props.interface';
import { classNames } from '@/general/utils/utils';
import { Trans } from '@lingui/react/macro';
import { Link, useLocation } from 'react-router-dom';

export interface SidePanelProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidePanel({ className, isOpen, onClose }: SidePanelProps) {
  const location = useLocation();

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
            {pageRoutes.map((route) => {
              const isActive = location.pathname === route.path;

              return (
                <Link
                  to={route.path}
                  className={classNames(
                    'flex relative py-4 cursor-pointer items-center justify-center text-gray-800 rounded-lg',
                    isActive ? 'bg-primary text-white' : ''
                  )}
                  key={route.path}
                  onClick={onClose}
                >
                  <span className="text-center text-nowrap">{route.handle.name}</span>
                </Link>
              );
            })}

            <div className="flex-grow" />
            <div className="flex items-center justify-center mt-4">
              <Button type={ButtonType.BORDER_GRAY} onClick={onClose}>
                <Trans>Schließen</Trans>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
