import React from 'react'
import specs from '../assets/spectacle-lenses.svg'

export default function Navbar() {
  return (
    <div>
        <header class="navbars">
            <a href="../index.html" class="menu-icon">
                <img src={specs} width="40px" height="40px" alt="logo" />
            </a>
            <a href="../index.html" class="brand-name h6">
                ipops
            </a>
            <nav>
                <ul>
                    <li class="list-items">
                        <div class='badge-icon'>
                            <a href="./wishlist.html"><i class="fas fa-heart fa-lg"></i></a>
                            <div class='badge dotbadge'>
                            </div>
                        </div>
                    </li>
                    <li class="list-items">
                        <div class='badge-icon'>
                            <a href="./cart.html"><i class="fas fa-shopping-cart fa-lg"></i></a>
                            <div class='badge numbadge'>
                            <small>1</small>
                            </div>
                        </div>
                    </li>
                    <li class="list-items">
                        <i class="far fa-user-circle fa-2x"></i>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
