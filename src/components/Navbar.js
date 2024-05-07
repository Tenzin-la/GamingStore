import { NavLink } from 'react-router-dom'
import './Navbar.css'
import cart from '../images/cart.png'
import { useState } from 'react'
import search from '../images/search.png'
import { useGlobalContext } from '../context/CartContext'
import { FaBars } from 'react-icons/fa'

export default function Navbar({ setCartOpen }) {

    const [openSignup, setOpenSignup] = useState(false)
    const { setSearchText } = useGlobalContext();
    const [barContent, setBarContent] = useState(false);
    const [barFit, setBarFit] = useState('');



    const handleOpen = () => {
        if (openSignup === true) {
            setOpenSignup(false)
        }
        else
            setOpenSignup(true)

    }

    console.log(barFit);



    return (
        <div className="navbar-main">
            <nav className="navbar">
                <div className="nav-left">

                    <h1><NavLink to='/'>eStore</NavLink></h1>
                    <ul>
                        <li><NavLink to='/feed'>Feed</NavLink></li>
                        <li><NavLink to='/'>Store</NavLink></li>
                        <li><NavLink to='/community'>Community</NavLink></li>

                    </ul>
                    <div className="searchbox">
                        <input
                            type="text"
                            placeholder="Type to Search..."
                            className='searchbar'
                            onChange={e => setSearchText(e.target.value)}

                        />
                        <button className="search-button"><img src={search} alt="image not found" /></button>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="cart" onClick={() => { setCartOpen((prev) => !prev) }}><img src={cart} /></button>
                    <button className="wishlist">3</button>
                    <button className="profile" onClick={handleOpen}>profile</button>

                    {openSignup && <div className="login-signup">
                        <NavLink to='/login' onClick={handleOpen}>Login</NavLink>
                        <NavLink to='/signup' onClick={handleOpen}>Create an Account?</NavLink>
                    </div>}



                </div>




            </nav >


            <nav className="mobile-navbar">
                <div className="mobile-nav-left">
                    <h1><NavLink to='/'>eStore</NavLink></h1>
                    <div className="searchbox">
                        <input
                            type="text"
                            placeholder="Type to Search..."
                            className='searchbar'
                            onChange={e => setSearchText(e.target.value)}

                        />
                        <button className="search-button"><img src={search} alt="image not found" /></button>

                    </div>
                </div>

                <div className="mobile-nav-right">
                    <button className="mobile-nav-right-cart" onClick={() => { setCartOpen((prev) => !prev) }}><img src={cart} /></button>
                    <button onClick={() => { { setBarContent((prev) => !prev) } }}><FaBars className='mobile-bar' /></button>

                    {barContent && <div className='mobile-nav-content' data-aos='fade-left'>
                        <ul>
                            <li><NavLink to='/feed' onClick={()=> setBarContent(false)}>Feed</NavLink></li>
                            <li><NavLink to='/'>Store</NavLink></li>
                            <li><NavLink to='/community'>Community</NavLink></li>

                        </ul>
                        <span className="close" onClick={() => setBarContent(false)}>X</span>
                    </div>}




                </div>
            </nav>

        </div>

    )
}
