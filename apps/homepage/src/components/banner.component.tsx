import { GlassOverlay } from '@/components/glass-overlay.componen';
import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export const BannerTextPositions = {
  left: 'lg:left-16 lg:justify-start',
  center: 'lg:justify-center',
  right: 'lg:right-16 lg:justify-end',
};

export interface BannerProps extends BaseComponentPropsWithChildren {
  image: string;
  textPosition?: keyof typeof BannerTextPositions;
  glassEffect?: 'true' | 'false';
  bgPosition?: string;
  minHeight?: string;
}

export function Banner({
  bgPosition = 'bg-center',
  children,
  className,
  image,
  textPosition = 'center',
  glassEffect,
  minHeight = 'min-h-[40vh]',
}: BannerProps) {
  return (
    <section className={classNames(className, minHeight, 'relative overflow-hidden')}>
      <div
        className={classNames(bgPosition, 'absolute z-1 inset-0 bg-cover')}
        style={{ backgroundImage: `url("${image}")` }}
      />
      {glassEffect === 'true' && <GlassOverlay className="z-5" />}
      <div
        className={classNames(
          BannerTextPositions[textPosition],
          'absolute inset-0',
          'flex items-center justify-center z-10 text-center'
        )}
      >
        <div
          className={classNames(
            'flex flex-col gap-4 justify-center items-center',
            textPosition === 'center' ? 'my-10 lg:my-30 mx-10 lg:max-w-2/3' : 'max-w-125'
          )}
        >
          {children}
        </div>
      </div>

      {/** render text twice to keep correct height, but this text here is behind the image */}
      <div
        className={classNames(
          'flex flex-col gap-4 justify-center items-center my-8',
          textPosition === 'center' ? 'my-10 lg:my-30 mx-10' : 'max-w-125'
        )}
      >
        {children}
      </div>
    </section>
  );
}
