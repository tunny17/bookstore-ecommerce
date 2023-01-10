import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import axios from 'axios';

const Home = () => {

  useEffect(() => {
    // IIFE
    (async () => {
      try{
        const { data: { books } } = await axios.get('data.json');
        console.log(books);
      }catch(error){
        console.log(error)
      }
    })()
  }, [])



  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home
