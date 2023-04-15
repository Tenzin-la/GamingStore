import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'


//images
import mario from '../images/mario.jpg'
import fornite from '../images/fornite.jpg'
import Gamelist from '../components/Gamelist'
import arrowup from '../images/arrowup.png'
//images of gamelist
import letsgopikachu from '../images/letsgopikachu.jpg'
import luigi from '../images/lugimansion.jpg'
import marioodyssey from '../images/marioodyssey.jpg'
import minecraft from '../images/minecraft.jpg'
import spyro from '../images/spyro.jpg'
import zelda from '../images/zeldamain.jpg'


export default function Home() {


  const [games, setGames] = useState([
    { name: 'Lengend of Zelda', type: 'Adventure', rating: 5, pic: zelda, price: 1999 },
    { name: 'Spyro:Reignited', type: 'Platform', rating: 4, pic: spyro, price: 2499 },
    { name: 'Mario Odyssey', type: 'Platform', rating: 4, pic: marioodyssey, price: 1999 },
    { name: 'Minecraft', type: 'Adventure', rating: 5, pic: minecraft, price: 3499 },
    { name: 'Luigis Mansion', type: 'Adventure', rating: 3, pic: luigi, price: 2399 },
    { name: "Let's go Pikachu", type: 'Adventure', rating: 5, pic: letsgopikachu, price: 4999 },

  ])

  var searchText='';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="home">
      <div className="hero">
        <div className="img-1">
          <img src={mario} alt="image not found" data-aos="zoom-in" />

        </div>
        <div className="img-2">
          <img src={fornite} alt="image not found" data-aos="zoom-in" />

        </div>
      </div>

      <div className="top-trending">
        <div className="heading">
          <div className="left" data-aos="fade-up">
            <big>Top Trending</big>
          </div>
          <div className="right" data-aos="fade-up">
            <big>Show all <img src={arrowup} alt="image not found" /></big>
          </div>
        </div>
        <div className="game-lists" data-aos="fade-up">
          <Gamelist setSearchText={searchText}  games={games.filter((game) => game.name.toLocaleLowerCase().includes(searchText))} />
        </div>
      </div>






    </div>
  )
}
