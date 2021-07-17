import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-buttom.component";

const CartDropdown = () => (
    <div className={'cart-dropdown'}>
        <div className={"cart-item"}/>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown;