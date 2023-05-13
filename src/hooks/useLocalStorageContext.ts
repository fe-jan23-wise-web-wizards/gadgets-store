import { LocalStorageContext } from '@/contexts/LocalStorageContext';
import { useContext } from 'react';

export const useLocalStorageContext = () => {
  const localStorageContext = useContext(LocalStorageContext);

  if (localStorageContext === undefined) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider',
    );
  }

  return localStorageContext;
};
