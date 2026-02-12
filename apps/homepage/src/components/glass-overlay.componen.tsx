import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export function GlassOverlay({ className, style }: BaseComponentProps) {
  return (
    <div
      className={classNames(className, 'absolute inset-0')}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        ...style,
      }}
    />
  );
}
