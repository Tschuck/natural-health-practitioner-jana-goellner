import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';
import { ReactNode } from 'react';

export interface TwoColumnsProps extends BaseComponentProps {
  left: ReactNode;
  leftClass?: string;
  right: ReactNode;
  rightClass?: string;
}

export function TwoColumns({ className, leftClass, left, right, rightClass }: TwoColumnsProps) {
  return (
    <div
      className={classNames(
        className,
        'lg:grid grid-cols-2 gap-4 lg:gap-8 flex items-center justify-center flex-col p-4 lg:p-8 lg:py-16'
      )}
    >
      <div className="flex items-center justify-center w-full max-w-full p-4 lg:p-0">
        <div className={classNames(leftClass, 'flex flex-col gap-4 w-full lg:max-w-110 relative')}>{left}</div>
      </div>
      <div className="flex items-center justify-center w-full max-w-full p-4 lg:p-0">
        <div className={classNames(rightClass, 'flex flex-col gap-4 w-full lg:max-w-110 relative')}>{right}</div>
      </div>
    </div>
  );
}
