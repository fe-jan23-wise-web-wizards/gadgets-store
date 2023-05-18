import { LocalStorageProvider } from '@/contexts/LocalStorageContext';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <QueryClientProvider client={queryClient}>
        <LocalStorageProvider>
          <RouterProvider router={router} />
        </LocalStorageProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
