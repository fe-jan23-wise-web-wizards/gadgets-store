import { getAllProducts } from '@api/requests';
import { useLocalStorage } from '@utils/useLocalStorage';

export const TestLocalStorage = () => {
  const { storedItems, addItem, removeItem, itemsCount } = useLocalStorage(
    'favorites',
    [],
  );


  const handleSetItem = async () => {
    const newItem = await getAllProducts(1);
    console.log(newItem);

    addItem(newItem[0]);
  };

  return (
    <>
      <p>{JSON.stringify(itemsCount)}</p>

      <button onClick={() => handleSetItem()}>Set new value</button>
      <button onClick={() => removeItem(storedItems[0])}>Remove item</button>
    </>
  );
};
