import './card.styles.css'
import cardData from './card.data'

import {
    addToCart
} from '../../redux/actions'
import { connect } from 'react-redux'

export const Card = () => {
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
                <div className="card-cart" onClick={() => addToCart(item.id)}>
                    Add to Cart
                </div>
            </div>
        )}
        </div>
    )
}

export default connect()(Card)