
import { NavLink } from 'react-router-dom'
import './Gamelist.css'


export default function Gamelist({ games,all }) {


    return (
        <div className={`gamelist ${all ? 'gamelistUp' : ''}`}>
            {games && games.map((game) => (
                <NavLink to = {`details/${game.id}`} id={game.id}><div className="game-card">
                    <div className="left"><img src={game.pic} alt="image not found" /></div>
                    <div className="right">
                        <h2>{game.name}</h2>
                        <input type='radio' checked></input>
                        <input type='radio' checked></input>
                        <input type='radio' checked></input>
                        <input type='radio' checked></input>
                        <input type='radio' checked></input><br />

                        <big>{game.type}</big>

                    </div>
                </div>
                </NavLink>
            ))}


        </div>
    )
}
