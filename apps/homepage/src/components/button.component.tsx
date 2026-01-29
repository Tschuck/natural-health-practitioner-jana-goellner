import { Link } from '@/components/link';
import { classNames } from '@/utils/utils';
import { ElementType, MouseEventHandler, PropsWithChildren } from 'react';

export enum ButtonType {
  ACTION = 'ACTION',
  OUTLINE_DARK = 'OUTLINE_DARK',
  OUTLINE_GREEN = 'OUTLINE_GREEN',
  ICON_PRIMARY = 'ICON_PRIMARY',
  ICON = 'ICON',
}

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  Icon?: ElementType;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type: ButtonType;
  buttonElement?: ElementType;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({
  buttonElement,
  children,
  isLoading,
  disabled,
  className,
  Icon,
  link,
  onClick,
  type,
}: ButtonProps) {
  const buttonClasses = [className];
  const ButtonElement: ElementType = buttonElement || link ? Link : 'button';

  switch (type) {
    case ButtonType.ACTION: {
      buttonClasses.push('flex items-center gap-4 px-4 py-2 border border-dark-gray hover:primary-hover font-archivo');
      break;
    }
    case ButtonType.OUTLINE_DARK: {
      buttonClasses.push(
        'flex items-center gap-4 px-4 py-2 border border-dark-gray hover:bg-dark-gray hover:text-white font-archivo cursor-pointer'
      );
      break;
    }
    case ButtonType.OUTLINE_GREEN: {
      buttonClasses.push(
        'flex items-center gap-4 px-4 py-2 border rounded-lg hover:bg-gray-100 text-gray-900 font-archivo'
      );
      break;
    }
    case ButtonType.ICON_PRIMARY: {
      buttonClasses.push(
        'flex items-center justify-center w-10 h-10 rounded-full bg-primary border hover:primary-hover text-white'
      );
      break;
    }
    case ButtonType.ICON: {
      buttonClasses.push(
        'flex items-center justify-center w-10 h-10 rounded-full border hover:bg-gray-100 text-secondary border-secondary hover:bg-secondary hover:text-white'
      );
      break;
    }
  }

  return (
    <>
      <ButtonElement
        className={classNames(...buttonClasses)}
        onClick={onClick}
        {...(link ? { to: link } : {})}
        disabled={isLoading || disabled}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </ButtonElement>
    </>
  );
}
