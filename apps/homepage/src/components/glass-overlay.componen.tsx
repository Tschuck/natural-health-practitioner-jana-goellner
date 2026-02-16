import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

interface GlassOverlayProps extends BaseComponentProps {
  blur?: string;
}

export function GlassOverlay({ blur = '10px', className, style }: GlassOverlayProps) {
  return (
    <div
      className={classNames(className, 'absolute inset-0')}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: `blur(${blur})`,
        ...style,
      }}
    />
  );
}
