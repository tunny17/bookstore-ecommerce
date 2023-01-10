import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <div class="card card-vertical d-flex direction-column relative shadow">
            <div class="card-image-container">
                <img class="card-image" src="/assets/shoes.jpg" alt="shoes" />
            </div>
            <div class="card-details">
                <div class="card-title">Premium Collection</div>
                <div class="card-description">
                    <p class="card-des">Men Sneakers</p>
                    <p class="card-price">
                        Rs. 1750
                        <span class="price-strike-through">Rs. 2499</span>
                        <span class="discount">(30% OFF)</span>
                    </p>
                </div>
                <div class="cta-btn">
                    <button class="button btn-primary btn-icon cart-btn d-flex   align-center justify-center gap cursor btn-margin">
                    <img src="/assets/cart-white.png" alt="cart" /> 
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
