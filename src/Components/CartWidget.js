import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)
  return (
    <Link to="/cart" className="cart">
      <BsFillCartCheckFill />
      <span>{cartQuantity()}</span>
    </Link>
  );
};

export default CartWidget;