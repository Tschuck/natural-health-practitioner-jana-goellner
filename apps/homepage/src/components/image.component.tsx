import { classNames } from '@/utils/utils';

export const ImageCardSizeClasses = {
  small: 'h-80 w-60',
  medium: 'h-100 w-80',
  large: 'w-full h-full',
};

export interface ImageProps {
  image: string;
  className?: string;
  size: keyof typeof ImageCardSizeClasses;
}

export function ImageCard({ className, size, image }: ImageProps) {
  return (
    <div
      className={classNames(className, ImageCardSizeClasses[size], 'rounded-2xl bg-center bg-cover ')}
      style={{ backgroundImage: `url("${image}")` }}
    />
  );
}
