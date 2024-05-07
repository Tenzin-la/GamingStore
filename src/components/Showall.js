import './Showall.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

//images

import del from '../images/trash.png'
import wishlist from '../images/wishlist.png'
import cart from '../images/cart.png'

import 'aos/dist/aos.css'
import { PRODUCTS } from '../data/Product'


export default function Showall() {

    const games = PRODUCTS;

    const [query, setQuery] = useState('')

    console.log(query);

    const filteredGames = games.filter(game => {
        if (query === 'all') return game
        else {
            return game.type.toLowerCase().includes(query.toLowerCase())

        }
    })


    return (
        <div className='showall'>
            <div className="heading">
                <h2>All Games</h2>
                <select name="genre" id="genre" value={query} onChange={e => setQuery(e.target.value)} >
                    <option>all</option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Platform</option>
                </select>
            </div>
            <div className="showall-box" data-aos='fade-up'>
                {games && filteredGames.map((game) => (
                    <NavLink to={`/details/${game.id}`} id={game.id}>
                        <div className="showall-card" key={game.name}>
                            <div className="showall-left">
                                <div className="show-left-left">
                                    <img src={game.pic} alt="image not found" />
                                </div>
                                <div className="show-left-right">
                                    <h2>{game.name}</h2>
                                    <input type='radio' checked></input>
                                    <input type='radio' checked></input>
                                    <input type='radio' checked></input>
                                    <input type='radio' checked></input>
                                    <input type='radio' checked></input><br />

                                    <big>{game.type}</big>
                                </div>


                            </div>

                            <div className="showall-right">
                                <p>
                                    {game.content}
                                </p>
                            </div>
                            <div className="showall-buttons">
                                <button className="delete"><img src={del} alt="not found" /></button>
                                <button className="wishlist"> <img src={wishlist} alt="not found" /></button>
                                <button className="cart"><img src={cart} alt="not found" /></button>
                            </div>
                        </div>
                    </NavLink>
                ))}

            </div>

        </div>
    )
}
