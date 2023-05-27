import clsx from 'clsx';
import { memo } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Avatar = ({ src, alt, size = 'medium', className = '' }: AvatarProps) => {
  const getAvatarSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8';
      case 'medium':
        return 'w-12 h-12';
      case 'large':
        return 'w-16 h-16';
      default:
        return 'w-12 h-12';
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        'rounded-full p-1 cursor-pointer',
        'hover:bg-indigo-50',
        getAvatarSizeClasses(),
        `${className}`
      )}
    />
  );
};

export default memo(Avatar);
