import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <h1 className="heading-title"> tunny books </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <a href="/" className="link cursor">Home</a>
                    </li>
                    <li className="list-item-inline">
                        <a href="/" className="link cursor">Card</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
