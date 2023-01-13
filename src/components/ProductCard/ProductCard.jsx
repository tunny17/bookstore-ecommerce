import React from 'react'
import './ProductCard.css'
import { AiFillStar } from 'react-icons/ai'

export const ProductCard = ({product}) => {

    const { id, name, image, discount, oldPrice, newPrice, rating  } = product

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
                    <button className="button btn-primary btn-icon cart-btn d-flex   align-center justify-center gap cursor btn-margin"> 
                        Add To Cart 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
