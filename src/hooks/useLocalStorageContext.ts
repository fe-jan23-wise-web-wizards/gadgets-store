import { LocalStorageContext } from '@/contexts/LocalStorageContext';
import React from 'react';

export const useLocalStorageContext = () => {
  const localStorageContext = React.useContext(LocalStorageContext);

  if (localStorageContext === undefined) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider',
    );
  }

  return localStorageContext;
};
