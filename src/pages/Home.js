import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/Product'


// //images
import mario from '../images/mario.jpg'
import fornite from '../images/fornite.jpg'
import Gamelist from '../components/Gamelist'
import arrowup from '../images/arrowup.png'
import { useGlobalContext } from '../context/CartContext'




export default function Home() {

  const navigate = useNavigate();
  const { filteredGames } = useGlobalContext();


  const [all, setAll] = useState(false)
  const [carouselImage, setCarouselImage] = useState([{ pic: mario }, { pic: fornite }]);

  const handleNavigate = () => {
    setTimeout(() => {

      navigate('/showall')

    }, 500);
  }


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="home">
      <div className={`hero ${all ? 'heroUp' : ''}`}>
        <div className="img-1">
          <img src={mario} alt="not found" data-aos="zoom-in" />

        </div>
        <div className="img-2">
          <img src={fornite} alt="not found" data-aos="zoom-in" />

        </div>
        {/* mobile carousel  */}


        <div className='poster-Image' >
          
              <img src={carouselImage[1].pic} alt="not found" key={carouselImage[1].pic} />
           

        </div>




      </div>

      <div className="top-trending">
        <div className={`heading ${all ? 'disp' : ''}`}>
          <div className="left" data-aos="fade-up">
            <big>Top Trending</big>
          </div>
          <div className="right" data-aos="fade-up">
            <Link onClick={handleNavigate}><big onClick={() => { if (all) { setAll(false) } else { setAll(true) } }}>Show all <img src={arrowup} alt="not found" /></big></Link>
          </div>
        </div>
        <div className="game-lists" data-aos="fade-up">

          {PRODUCTS && <Gamelist games={filteredGames} all={all} />}
        </div>
      </div>

      <img src={carouselImage[1].img} alt="" />

    </div>
  )
}
