// export function useCart() {
//   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//     'cart',
//     []
//   );
//
//   const addItemToCart = useCallback((item: CartItem) => {
//     setCartItems((prevCartItems) => {
//       const index = prevCartItems.findIndex((i) => i.id === item.id);
//       if (index === -1) {
//         return [...prevCartItems, item];
//       }
//       const updatedCartItems = [...prevCartItems];
//       updatedCartItems[index].quantity += item.quantity;
//       return updatedCartItems;
//     });
//   }, [setCartItems]);
//
//   const removeItemFromCart = useCallback((id: string) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((i) => i.id !== id)
//     );
//   }, [setCartItems]);
//
//   const updateItemQuantity = useCallback((id: string, quantity: number) => {
//     setCartItems((prevCartItems) => {
//       const index = prevCartItems.findIndex((i) => i.id === id);
//       if (index === -1) {
//         return prevCartItems;
//       }
//       const updatedCartItems = [...prevCartItems];
//       updated
