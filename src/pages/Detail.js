import './details.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'


//aos
import 'aos/dist/aos.css'
import { PRODUCTS } from '../data/Product'
import { useGlobalContext } from '../context/CartContext'
// import CartContextProvider from '../context/CartContext'

export default function Detail() {


  const { id } = useParams();

  const games = PRODUCTS;

  // const [game, setGame] = useState({});

  const { addToCart, cartCount } = useGlobalContext();


  // useEffect(() => {

  //   games.filter(game => {
  //     return game.id === id
  //   })

  // }, [id, games])

  // console.log(games);



  return (
    <div className='details'>

      {games[id-1] && <div className="details-card" data-aos='fade-up'>

        <div className="background">
          <img src={games[id-1].back} alt="" />


          <div className="small-pic"><img src={games[id-1].pic} alt="not found" /></div>
        </div>

        {/* mobilebackground */}

        <div className="mobile-background">
          <img src={games[id-1].pic} alt="not found" />

        </div>

        <div className="game-content">
          <div className="rating">
            <big> Rating: </big>
            <input type='radio' checked></input>
            <input type='radio' checked></input>
            <input type='radio' checked></input>
            <input type='radio' checked></input>
            <input type='radio' checked></input><br />
          </div>
          <div className="content">
            <div className="main-contents" data-aos='zoom-in'>
              <h2>Synopsis</h2>
              {games[id-1].content}

            </div>
            <div className="buttons" data-aos='flip-up' data-aos-duration='2000'>
              <button className="buy">Buy Now</button>
              <button className="cart" onClick={() => addToCart(games[id-1].id)}>Add to Cart {cartCount[games[id-1].id] > 0 && <>  {cartCount[games[id-1].id]}</>}</button>
              <button className="wishlist">Add to wishlist</button>
            </div>
          </div>
        </div>

      </div>}

    </div>
  )
}
