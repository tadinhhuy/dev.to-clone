import clsx from 'clsx';
import { memo } from 'react';

type Variant = 'text' | 'outlined' | 'contained';

type Button = {
  variant: Variant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: { [key in Variant]: string } = {
  text: clsx(
    'rounded-md px-4 py-2 text-neutral-700',
    'hover:bg-indigo-100 hover:text-blue-800 hover:underline hover:decoration-blue-800'
  ),
  contained: clsx(
    'rounded-md border border-blue-700 bg-indigo-700 text-white',
    'px-4 py-2',
    'hover:bg-white hover:text-blue-700 hover:underline'
  ),
  outlined: clsx(
    'rounded-md border border-blue-700 text-blue-600',
    'px-4 py-2',
    'hover:bg-indigo-700 hover:text-white hover:underline'
  ),
};

const Button = ({ variant = 'outlined', className = '', children }: Button) => {
  return <button className={clsx(variantStyles[variant], className)}>{children}</button>;
};

export default memo(Button);