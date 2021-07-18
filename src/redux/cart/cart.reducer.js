import {cartActionTypes} from "./cart-action.types";

const INITAIL_STATE = {
    hidden: true
}

const cartReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer