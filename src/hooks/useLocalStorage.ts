import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';

type Key = 'favorites' | 'cart';

function getStorageValue(key: Key, defaultValue: Product[]) {
  const saved = localStorage.getItem(key) || '[]';
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: Key, defaultValue: Product[]) => {
  const [value, setValue] = useState<Product[]>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
