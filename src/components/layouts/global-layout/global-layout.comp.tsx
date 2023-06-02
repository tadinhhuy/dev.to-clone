import { Header } from '@/components';

const GlobalLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <div className="bg-neutral-100">
        <main className="mx-[106px] mt-14 min-h-[calc(100dvh-3.5rem)] p-4">{children}</main>
      </div>
      <footer className="h-60 bg-neutral-200 p-10">Footer</footer>
    </div>
  );
};

export default GlobalLayout;
