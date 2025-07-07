import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
const Header = () => {

    const { cartItems } = useContext(CartContext);

    const itemCount = cartItems.reduce((total, item) => total + item.qty, 0);

    console.log(cartItems, "Cartitem")

    return (
        <header className="header">
            <Link to={'/'}><h1 className="logo">CartSystem</h1></Link>

            <nav className="nav-links">
              
                <Link to="/about">About</Link>
                <Link to="/">Products</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Link className="cart" to='/cart'>
                <span>🛒 Cart</span>
                <span className="cart-badge">{itemCount}</span>
            </Link>
        </header>

    );
};

export default Header;
