import AppRouter from './app-router';
import './main.css';
import QueryClientProvider from './providers/query-client-provider';

const App = () => {
  return (
    <QueryClientProvider>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
