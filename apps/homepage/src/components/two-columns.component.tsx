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
      className={classNames(className, 'lg:grid grid-cols-2 gap-4 lg:gap-8 flex items-center justify-center flex-col')}
    >
      <div className="flex items-center justify-center relative h-full">
        <div className={classNames(leftClass, 'flex flex-col gap-4 p-8')}>{left}</div>
      </div>
      <div className="flex items-center justify-center relative h-full">
        <div className={classNames(rightClass, 'flex flex-col gap-4 p-8')}>{right}</div>
      </div>
    </div>
  );
}
