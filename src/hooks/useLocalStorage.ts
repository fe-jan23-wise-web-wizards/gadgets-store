import { useEffect, useState } from 'react';

function getStorageValue<T>(key: string, defaultValue: T) {
  const saved = localStorage.getItem(key) || 'null';
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
