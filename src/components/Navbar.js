import { NavLink } from 'react-router-dom'
import './Navbar.css'
import cart from '../images/cart.png'
import { useState } from 'react'
import search from '../images/search.png'

export default function Navbar({setCartOpen, setSearchText}) {

    const handleChange = event =>{
        setSearchText= event.target.value;
    }

    return (
        <nav className="navbar">
            <div className="nav-left">

                <h1><NavLink to='/'>eStore</NavLink></h1>
                <ul>
                    <li><NavLink to='/feed'>Feed</NavLink></li>
                    <li><NavLink to='/library'>Library</NavLink></li>
                    <li><NavLink to='/'>Store</NavLink></li>
                    <li><NavLink to='/community'>Community</NavLink></li>

                </ul>
                <div className="searchbox">
                    <input
                        type="text"
                        placeholder="Type to Search..."
                        className='searchbar'
                        onChange={handleChange}
                        
                    />
                    <button className="search-button"><img src={search} alt="image not found" /></button>
                </div>
            </div>

            <div className="nav-right">
                <button className="cart" onClick={()=>{setCartOpen((prev)=>!prev)}}><img src={cart} /></button>
                <button className="wishlist">3</button>
                <button className="profile">profile</button>
            </div>
        </nav >
    )
}
