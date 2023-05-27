import { Header } from '@/components';

const GlobalLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <div className="mx-24 min-h-[calc(100vh-5rem)]">{children}</div>
      <div className='h-60 bg-neutral-200 p-10'>Footer</div>
    </div>
  );
};

export default GlobalLayout;
