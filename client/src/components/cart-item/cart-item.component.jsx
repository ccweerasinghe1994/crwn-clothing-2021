import React from "react";
import {
  CartItemContainer,
  ItemDetailContainer,
  NameContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);
export default CartItem;
