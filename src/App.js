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

//images
import fortniteCart from './images/fortniteCart.jpg'
import letsgoPikachu from './images/letsgopikachu.jpg'



function App() {

  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems,setCartItems] = useState([
    {name:'Fortnite', image:fortniteCart, price:2999,count:1},
    {name:'Lets go Pikachu', image:letsgoPikachu, price:3499, count:1}
  ])
  return (
    <div className="App">
      <div className="left-lib">
        <Sidenav />
      </div>
      <div className="right-content">
        <Navbar  setCartOpen={setCartOpen}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/library' element={<Library />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </div>
      <div className="cart">
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />

      </div>
    </div>
  );
}

export default App;
