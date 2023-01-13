import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div    className='navbar'>
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon">
                <h1 className="heading-title"> 
                    <Link  to='/' className='link cursor font-weight-sm' >Tunny Books</Link>
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor">Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/cart" className="link cursor">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
