import cartActionTypes from "./cart.types";
import { addItemToCart, decreaseCartItemQuantity } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.item),
      };
    case cartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, action.payload.item),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.item.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
