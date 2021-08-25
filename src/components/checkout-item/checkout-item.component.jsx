import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  decreaseCartItemQuantity,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseCartItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
