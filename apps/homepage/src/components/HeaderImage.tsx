import { classNames } from '@/utils/utils';

export interface HeaderImageProps {
  height: string;
  image: string;
  className?: string;
}

export function HeaderImage({ className, height, image }: HeaderImageProps) {
  return (
    <div
      className={classNames(className, 'w-full bg-center bg-cover')}
      style={{ height, backgroundImage: `url("${image}")` }}
    />
  );
}
