import React from 'react'
import specs from '../assets/spectacle-lenses.svg'

export default function Navbar() {
  return (
    <div>
        <header className="navbars">
            <a href="../index.html" className="menu-icon">
                <img src={specs} width="40px" height="40px" alt="logo" />
            </a>
            <a href="../index.html" className="brand-name h6">
                ipops
            </a>
            <nav>
                <ul>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <a href="./wishlist.html"><i className="fas fa-heart fa-lg"></i></a>
                            <div className='badge dotbadge'>
                            </div>
                        </div>
                    </li>
                    <li className="list-items">
                        <div className='badge-icon'>
                            <a href="./cart.html"><i className="fas fa-shopping-cart fa-lg"></i></a>
                            <div className='badge numbadge'>
                            <small>1</small>
                            </div>
                        </div>
                    </li>
                    <li className="list-items">
                        <i className="far fa-user-circle fa-2x"></i>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
