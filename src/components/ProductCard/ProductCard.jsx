import React from 'react'
import './ProductCard.css'
import { AiFillStar } from 'react-icons/ai'

const ProductCard = ({product}) => {

    const { id, name, image, discount, oldPrice, newPrice, rating  } = product

  return (
    <div>
        <div class="card card-vertical d-flex direction-column relative shadow">
            <div class="card-image-container">
                <img class="card-image" src={image} alt="shoes" />
            </div>
            <div class="card-details">
                <div class="card-title">{name}</div>
                <div class="card-description">
                    <p class="card-price    d-flex align-end">
                        Rs. {newPrice}
                        <span class="price-strike-through">Rs. {oldPrice}</span>
                        <span class="discount">({discount}% OFF)</span>
                    </p>
                    <p  className='d-flex  align-center'>
                        <span   className='star-icon'>
                            <AiFillStar />
                        </span>
                        {rating}
                    </p>
                </div>
                <div class="cta-btn">
                    <button class="button btn-primary btn-icon cart-btn d-flex   align-center justify-center gap cursor btn-margin"> 
                        Add To Cart 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
