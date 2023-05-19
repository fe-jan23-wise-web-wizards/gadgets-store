import { ClerkProvider } from '@clerk/clerk-react';
import { LocalStorageProvider } from '@contexts/LocalStorageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from '@utils/router';
import { RouterProvider } from 'react-router-dom';

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
