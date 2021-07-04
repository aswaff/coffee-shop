import './cart.styles.css'
import React, { useContext } from 'react';


import {CartContext} from "../../cartContext";

export const Cart = () => {
    const {cartList, setCartList} = useContext(CartContext)
    return (
        <div><h1>{cartList.map}</h1></div>
    )
}