import { classNames } from '@/utils/utils';
import { Trans } from '@lingui/react/macro';
import { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
  className?: string;
}

export function TextContent({ className, children }: TextProps) {
  return (
    <p className={classNames(className)}>
      <Trans>{children}</Trans>
    </p>
  );
}
