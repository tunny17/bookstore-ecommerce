import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header class="heading d-flex grow-shrink-basis align-center">
            <div class="heading-title-icon d-flex grow-shrink-basis align-center">
                <h1 class="heading-title"> tunny books </h1>
            </div>
            <nav class="navigation">
                <ul class="list-non-bullet">
                    <li class="list-item-inline">
                        <a href="/" class="link cursor">Home</a>
                    </li>
                    <li class="list-item-inline">
                        <a href="/" class="link cursor">Card</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
