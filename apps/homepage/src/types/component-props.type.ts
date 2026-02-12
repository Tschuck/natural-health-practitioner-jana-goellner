import { PropsWithChildren } from 'react';

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface BaseComponentPropsWithChildren extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}
