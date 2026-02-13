import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';
import { ReactNode } from 'react';

export interface TwoColumnsProps extends BaseComponentProps {
  left: ReactNode;
  leftAlign?: 'start' | 'center' | 'middle';
  leftClass?: string;
  right: ReactNode;
  rightClass?: string;
  rightAlign?: 'start' | 'center' | 'middle';
}

export function TwoColumns({
  className,
  left,
  leftAlign = 'center',
  leftClass,
  right,
  rightAlign = 'center',
  rightClass,
}: TwoColumnsProps) {
  return (
    <div
      className={classNames(
        className,
        'lg:grid grid-cols-2 gap-4 lg:gap-8 flex items-center justify-center flex-col p-4 lg:px-8'
      )}
    >
      <div className={classNames('flex justify-center w-full max-w-full p-4 lg:p-0 h-full', `items-${leftAlign}`)}>
        <div className={classNames(leftClass, 'flex flex-col gap-4 w-full lg:max-w-130 relative')}>{left}</div>
      </div>
      <div className={classNames('flex justify-center w-full max-w-full p-4 lg:p-0 h-full', `items-${rightAlign}`)}>
        <div className={classNames(rightClass, 'flex flex-col gap-4 w-full lg:max-w-130 relative')}>{right}</div>
      </div>
    </div>
  );
}
