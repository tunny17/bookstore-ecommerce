import React from 'react'
import './ProductCard.css'
import { AiFillStar } from 'react-icons/ai'
import { useCart } from '../../context/cart-context'
import { getProductById } from '../../utils/findProduct'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({product}) => {

  const { id, name, image, discount, oldPrice, newPrice, rating  } = product

  const { cart, cartDispatch } = useCart();

  const isProductInCart = getProductById(cart, id) 

  const navigate = useNavigate();

  const handleAddToCart = () => {
    cartDispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
  }

  const handleGoToCart = () => {
    navigate('/cart');
  }


  return (
    <div>
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={image} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-title">{name}</div>
                <div className="card-description">
                    <p className="card-price    d-flex align-end">
                        Rs. {newPrice}
                        <span className="price-strike-through">Rs. {oldPrice}</span>
                        <span className="discount">({discount}% OFF)</span>
                    </p>
                    <p  className='d-flex  align-center'>
                        <span   className='star-icon'>
                            <AiFillStar style={{color: '#f97316'}} />
                        </span>
                        {rating}
                    </p>
                </div>
                <div className="cta-btn">
                    <button className="button btn-primary btn-icon cart-btn d-flex   align-center justify-center gap cursor btn-margin" onClick={ isProductInCart ? handleGoToCart : handleAddToCart} > 
                        {isProductInCart ? 'Go To Cart' : 'Add To Cart'} 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
