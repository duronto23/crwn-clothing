import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import './cart-component.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-Items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;