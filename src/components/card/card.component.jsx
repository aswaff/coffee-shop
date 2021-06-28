import './card.styles.css'
import cardData from './card.data'
import React, { useState } from 'react';

import {
    addToCart
} from '../../redux/actions'
import { connect } from 'react-redux'

export const Card = (props) => {
    const [cart, setCart] = useState(0);
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
                <button className="card-cart" onClick={() => {setCart(item.id); console.log({cart})}}>
                    Add to Cart
                </button>
                {/* {console.log({cart})} */}
            </div>
            
        )}
        </div>
    )
}

export default connect()(Card)