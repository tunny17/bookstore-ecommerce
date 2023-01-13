import React, { Fragment } from 'react';
import { Navbar, HorizontalProductCard } from '../../components';
import { useCart } from '../../context/cart-context';
import './Cart.css';

export const Cart = () => {

  const { cart } = useCart();

  return (
    <Fragment>
      <Navbar />
      <main className='main'>
        {
          cart && cart.length > 0 ? <h2>Your Cart has ({cart.length}) items </h2> : <h2>Your Cart is Empty</h2>
        }
        <div  className='main-cart d-flex direction-column gap'> 
          {
            cart && cart.length > 0 ? cart.map(product => <HorizontalProductCard  key={product.id}  product={product} />) : ''
          } 
        </div>
      </main>
    </Fragment>
  )
}

