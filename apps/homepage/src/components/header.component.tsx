import { classNames } from '@/utils/utils';
import { Trans } from '@lingui/react/macro';
import { PropsWithChildren } from 'react';

export const HeaderType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  b: 'b',
} as const;
export type HeaderType = (typeof HeaderType)[keyof typeof HeaderType];

export interface HeaderProps extends PropsWithChildren {
  type: HeaderType;
  className?: string;
}

const typeClassMap: Record<HeaderType, string> = {
  h1: 'text-4xl lg:text-6xl font-semibold',
  h2: 'text-2xl lg:text-5xl font-semibold',
  h3: 'text-2xl lg:text-4xl font-semibold',
  h4: 'text-2xl lg:text-2xl font-semibold',
  b: 'font-bold',
};

export function Header({ className, type, children }: HeaderProps) {
  const Tag = type as keyof JSX.IntrinsicElements;
  return (
    <Tag className={classNames(className, typeClassMap[type])}>
      <Trans>{children}</Trans>
    </Tag>
  );
}
