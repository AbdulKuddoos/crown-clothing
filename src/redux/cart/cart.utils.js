export const addItemToCart = (cartItems, itemToBeAdd) => {
  const itemExisted = cartItems.find((item) => item.id === itemToBeAdd.id);

  if (itemExisted) {
    return cartItems.map((item) =>
      item.id === itemToBeAdd.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
  }

  return [...cartItems, { ...itemToBeAdd, quantity: 1 }];
};
