import clsx from 'clsx';
import { memo } from 'react';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx('my-1 w-full rounded-md bg-white', className)}>{children}</div>;
};

export default memo(Card);
