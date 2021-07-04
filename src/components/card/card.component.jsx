import './card.styles.css'
import cardData from './card.data'
import React, { useContext } from 'react';
import {CartContext} from "../../cartContext";

import {
    addToCart
} from '../../redux/actions'
import { connect } from 'react-redux'

export const Card = () => {
    const {cartList, setCartList} = useContext(CartContext)
    // let cart = CartContext
    // <CartContext.Consumer>
    return (
        <div className="card-wrapper">
            {cardData.map(item => 
            <div className="card">
                <div className="card-pic">
                    <img src={item.image} alt="itempic" />
                </div>
                <div className="card-title">
                    <h2>{item.title}</h2>
                </div>
                <div className="card-price">
                    {item.price}
                </div>
                
                <button className="card-cart" onClick={() => setCartList(cartList => [...cartList, item], console.log(cartList)) }>
                    Add to Cart
                </button>
               
                {/* {console.log({cart})} */}
                {/*  {setCart(...cart, item); */}
            </div>
            
        )}
        </div>
    )
} 

export default connect()(Card)