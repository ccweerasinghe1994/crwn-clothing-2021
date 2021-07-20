import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-buttom.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className={'cart-dropdown'}>
        <div className={"cart-items"}>
            {cartItems.length ?
                cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>) :
                <span className={'empty-message'}>Your Cart Item Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));