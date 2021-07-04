import './order.styles.css'
import { Card } from '../../components/card/card.component'
import React, { useState } from 'react';

export const Order = (cartValue) => {
    return (
            <Card cart={cartValue}/>
    )
}