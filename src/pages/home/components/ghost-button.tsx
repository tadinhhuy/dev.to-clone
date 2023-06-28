import clsx from 'clsx';
import Button from '@/components/button/button';

const GhostButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      variant="text"
      className={clsx(
        'px-2 py-1 text-[#3D3D3D]',
        'hover:bg-[#00000009] hover:text-[#3D3D3D] hover:no-underline',
        className
      )}
    >
      {children}
    </Button>
  );
};

export default GhostButton;
