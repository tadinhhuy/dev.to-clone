import { QueryClient, QueryClientProvider as Provider } from 'react-query';

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: JSX.Element }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
