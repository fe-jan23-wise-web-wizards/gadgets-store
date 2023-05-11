import { Product } from '@/types/Product';
import { useState } from 'react';

type Key = 'favorites' | 'cart';

export const useLocalStorage = (key: Key, initialValue: Product[]) => {
  const [storedItems, setStoredItems] = useState<Product[]>(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue),
    );
  });

  const isItemInStorage = (itemId: string) => {
    return storedItems.some(storedItem => storedItem.itemId === itemId);
  };

  const addItem = (item: Product) => {
    if (isItemInStorage(item.itemId)) {
      return;
    }

    const newItems = [...storedItems, item];

    setStoredItems(newItems);
    localStorage.setItem(key, JSON.stringify(newItems));
  };

  const removeItem = (item: Product) => {
    if (!isItemInStorage(item.itemId)) {
      return;
    }

    const newItems = storedItems.filter(
      storedItem => storedItem.itemId !== item.itemId,
    );

    setStoredItems(newItems);
    localStorage.setItem(key, JSON.stringify(newItems));
  };

  const itemsCount = storedItems.length;

  return {
    storedItems,
    addItem,
    removeItem,
    itemsCount,
    isItemInStorage,
  } as const;
};
