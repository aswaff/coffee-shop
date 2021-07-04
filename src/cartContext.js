import React, { createContext, useContext } from 'react';

// const cartList = 52;

export const CartContext = React.createContext({
    cartList: [],
    addToCart: () => {},
});