import React from "react";
import { gql } from "apollo-boost";
import { Mutation, Query } from "react-apollo";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  return (
    <Query query={GET_CART_ITEM_COUNT}>
      {({ data: { itemCount } }) => (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
          {(toggleCartHidden) => (
            <CartIcon
              toggleCartHidden={toggleCartHidden}
              itemCount={itemCount}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};

export default CartIconContainer;
