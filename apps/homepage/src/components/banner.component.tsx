import { GlassOverlay } from '@/components/glass-overlay.componen';
import { BaseComponentPropsWithChildren } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';

export const BannerTextPositions = {
  left: 'lg:left-16',
  center: '',
  right: 'lg:right-16',
};

export interface BannerProps extends BaseComponentPropsWithChildren {
  image: string;
  textPosition?: keyof typeof BannerTextPositions;
  glassEffect?: 'true' | 'false';
}

export function Banner({ children, className, image, textPosition = 'center', glassEffect }: BannerProps) {
  return (
    <section className={classNames(className, 'relative bg-center overflow-hidden')}>
      <img src={image} className="absolute z-0 justify-start bg-cover flex items-center" />
      {glassEffect === 'true' && <GlassOverlay />}
      <div
        className={classNames(
          BannerTextPositions[textPosition],
          'absolute left-0 right-0 top-0 bottom-0',
          'flex items-center justify-center lg:justify-start z-10 text-center'
        )}
      >
        <div
          className={classNames(
            'flex flex-col gap-4 justify-center items-center',
            textPosition !== 'center' ? 'max-w-125' : ''
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
