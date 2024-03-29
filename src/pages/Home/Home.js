import React, { Fragment, useEffect, useState } from 'react';
import './Home.css';

// local imports
import { Navbar } from '../../components/Navbar/Navbar';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/cart-context';

// dependency import
import axios from 'axios';

const Home = () => {

  const { cart } = useCart();

  console.log(cart);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      try{
        const { data: { books } } = await axios.get('data.json');
        setProducts(books);
      }catch(error){
        console.log(error)
      }
    })()
  }, [])



  return (
    <Fragment>
      <Navbar />
      <main className='main d-flex gap wrap'>
      {
        products.map((product) =>  <ProductCard key={product.id} product={product} /> )
      }
      </main>
    </Fragment>
  )
}

export default Home
