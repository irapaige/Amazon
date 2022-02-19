import React from 'react';
import './cart.css';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={'cart-container'}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is currently empty</p>
          <div className={'Start Shopping'}></div>
          <Link to='/'>
            <span>
              <i className='fa-solid fa-arrow-left'></i>
            </span>
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div className='wrapper'>
          <div className='Titles'>
            <h3 className='product-title'>Title</h3>
            <h3 className='price-title'>Price</h3>
            <h3 className='product-quantity'>Quantity</h3>
            <h3 className='product-total'>Total</h3>
          </div>
          <div classname='cart-items'>
            {cart.cartItems?.map((cartItem) => (
              <div className='cart-item' key={cartItem.id}>
                <img src={cartItem.image} alt='cartIten.name'></img>
                <div className='description'>
                  <h3 className='name'>{cartItem.name}</h3>
                  <p>{cartItem.description}</p>
                  <button>Remove</button>
                </div>
                <div className='price'>${cartItem.price}</div>
                <div className='quantity'>
                  <button>-</button>
                  <div className='count'>{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>{' '}
                {/*end of quantity */}
              </div> //end of cart-item
            ))}
          </div>{' '}
          {/*end of cart items      */}
          <div className='summary'>
            <button className='clearCart'>Clear Cart</button>
            <div className='chekout'></div>
            <div className='subtotal'>
              <span>Subtotal</span>
              <span className='amount'>${cart.cartTotalAmount}</span>
              <p>Taxes and Shipping calculated at checkout </p>
              <button>Check Out</button>
            </div>
          </div>{' '}
          {/* end of summary */}
        </div> //end of wrapper
      )}
    </div>
  );
};

export default CartScreen;
