import {cartActionTypes} from "./cart-action.types";

const INITAIL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer