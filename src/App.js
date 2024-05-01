import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Community from './pages/Community';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Showall from './components/Showall';
import Detail from './pages/Detail'




//images



function App() {

  const [cartOpen, setCartOpen] = useState(false)
  


  return (
    <div className="main">
      <div className="App">
        <div className="left-lib">
          <Sidenav />
        </div>
        <div className="right-content">
          <Navbar setCartOpen={setCartOpen} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/community' element={<Community />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/showall' element={<Showall />} />
            <Route path='/details/:id' element={<Detail />} />
          </Routes>
        </div>
        <div className="cart">
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />

        </div>
      </div>
      <div className="main-footer">
        <div className="footer">
          <div className="company">
            <h3>Egaming Store</h3>
            <p> Egaming store is a store , which contains every desirable Nintendo games available, at a minimum and resonable price.Especially for hardcore nintendo fans around the globe.Now you can get your favorite game in your hand within a day. </p>
          </div>
          <div className="games">
            <h3>Games</h3>
            <a href="#">Super Mario</a>
            <a href="#">Legend of Zelda</a>
            <a href="#">Pokemon</a>

          </div>
          <div className="usefulLink">
            <h3>Useful Links</h3>
            <a href="#">Your Account</a>
            <a href="#">Become Affiliate</a>
            <a href="#">Help</a>

          </div>
          <div className="contact">
            <h3>Contact</h3>
            <a href="#">  Dehradun, 24009, India</a>
            <a href="#">  info@example.com</a>
            <a href="#">  +01 234 568 99</a>
          </div>
        </div>

      
        <div className="copyright">&#169; 2023 Copyright: Tgstrap.com</div>

      </div>

    </div>


  );
}

export default App;
