// import React from 'react';
import './navbar.component.styles.css'

export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <a href="/">☕</a>
            </div>
            <div className="navbar-links">
                <a href="/about" className="navbar-link">About</a>
                <a href="/order" className="navbar-link">Order</a>
                <a href="/cart" className="navbar-cart">🛒</a>
            </div>

        </div>
    )
} 