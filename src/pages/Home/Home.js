import React, { Fragment, useEffect, useState } from 'react';
import './Home.css';

// local imports
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from '../../components/ProductCard/ProductCard';

// dependency import
import axios from 'axios';

const Home = () => {

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
        products.map((product) =>  <ProductCard product={product} /> )
      }
      </main>
    </Fragment>
  )
}

export default Home
