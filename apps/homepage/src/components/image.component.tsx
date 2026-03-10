import { classNames } from '@/utils/utils';

export const ImageCardSizeClasses = {
  custom: '',
  small: 'h-60 w-40 lg:h-80 lg:w-60',
  medium: 'h-80 w-60 lg:h-100 lg:w-80',
  large: 'w-full h-full',
};

export interface ImageProps {
  image: string;
  className?: string;
  imagePosition?: string;
  size: keyof typeof ImageCardSizeClasses;
}

export function ImageCard({ className, size, image, imagePosition = 'bg-center' }: ImageProps) {
  return (
    <div
      className={classNames(className, imagePosition, ImageCardSizeClasses[size], 'rounded-2xl bg-cover')}
      style={{ backgroundImage: `url("${image}")` }}
    />
  );
}
