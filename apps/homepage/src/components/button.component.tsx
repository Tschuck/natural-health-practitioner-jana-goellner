import { Link } from '@/components/link';
import { classNames } from '@/utils/utils';
import { ElementType, MouseEventHandler, PropsWithChildren } from 'react';

export enum ButtonType {
  ACTION = 'ACTION',
  OUTLINE_DARK = 'OUTLINE_DARK',
  OUTLINE_WHITE = 'OUTLINE_WHITE',
  FILLED_GREEN = 'FILLED_GREEN',
  OUTLINE_GREEN = 'OUTLINE_GREEN',
  ICON_PRIMARY = 'ICON_PRIMARY',
  ICON = 'ICON',
}

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  Icon?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type: ButtonType;
  buttonElement?: ElementType;
  isLoading?: boolean;
  disabled?: boolean;
  download?: string;
  target?: string;
  display?: string;
}

export function Button({
  buttonElement,
  children,
  download,
  isLoading,
  disabled,
  className,
  Icon,
  href,
  target,
  onClick,
  type,
  display = 'inline-block',
}: ButtonProps) {
  const buttonClasses = [className];
  const ButtonElement: ElementType = buttonElement || href ? Link : 'button';

  switch (type) {
    case ButtonType.ACTION: {
      buttonClasses.push(
        'w-full rounded-lg bg-hjg-dark-green px-4 py-2.5 text-sm font-medium text-hjg-whitesmoke transition hover:bg-hjg-dark-green-hover cursor-pointer'
      );
      break;
    }
    case ButtonType.OUTLINE_DARK: {
      buttonClasses.push(
        'text-center p-4 border border-dark-gray hover:bg-dark-gray hover:text-hjg-whitesmoke cursor-pointer'
      );
      break;
    }
    case ButtonType.OUTLINE_WHITE: {
      buttonClasses.push(
        'text-center p-4 border border-hjg-whitesmoke hover:bg-hjg-dark-green-hover hover:text-hjg-whitesmoke cursor-pointer text-hjg-whitesmoke'
      );
      break;
    }
    case ButtonType.OUTLINE_GREEN: {
      buttonClasses.push(
        'text-center p-4 border border-hjg-dark-green hover:bg-hjg-dark-green hover:text-hjg-whitesmoke cursor-pointer'
      );
      break;
    }
    case ButtonType.FILLED_GREEN: {
      buttonClasses.push(
        'text-center p-4 border border-hjg-dark-green bg-hjg-dark-green hover:bg-hjg-dark-green-hover text-hjg-whitesmoke cursor-pointer'
      );
      break;
    }
    case ButtonType.ICON_PRIMARY: {
      buttonClasses.push(
        'text-center justify-center w-10 h-10 rounded-full bg-primary border hover:primary-hover text-hjg-whitesmoke'
      );
      break;
    }
    case ButtonType.ICON: {
      buttonClasses.push(
        'text-center items-center justify-center min-w-10 min-h-10 rounded-full border hover:bg-gray-100 text-hjg-dark-green border-hjg-dark-green hover:bg-hjg-dark-green hover:text-hjg-whitesmoke'
      );
      display = 'flex';
      break;
    }
  }

  buttonClasses.push(display);

  return (
    <>
      <ButtonElement
        className={classNames(...buttonClasses)}
        onClick={onClick}
        {...(href ? { href } : {})}
        {...(download ? { download } : {})}
        {...(target ? { target } : {})}
        disabled={isLoading || disabled}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </ButtonElement>
    </>
  );
}
