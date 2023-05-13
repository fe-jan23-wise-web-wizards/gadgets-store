import { LocalStorageProvider } from '@/contexts/LocalStorageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

const queryClient = new QueryClient();

function App() {
  return (
    <LocalStorageProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LocalStorageProvider>
  );
}

export default App;
