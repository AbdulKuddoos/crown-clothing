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

export const decreaseCartItemQuantity = (cartItems, itemToBeDecrease) => {
  const itemExisted = cartItems.find((item) => item.id === itemToBeDecrease.id);

  if (itemExisted.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToBeDecrease.id);
  }

  return cartItems.map((item) =>
    item.id === itemToBeDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
