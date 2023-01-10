import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div    className='navbar'>
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon">
                <h1 className="heading-title"> Tunny Books </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <a href="/" className="link cursor">Home</a>
                    </li>
                    <li className="list-item-inline">
                        <a href="/" className="link cursor">Cart</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
