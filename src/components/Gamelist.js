

import './Gamelist.css'


export default function Gamelist({games}) {


    return (
        <div className='gamelist'>
            {games && games.map((game) => (
                <div className="game-card">
                    <div className="left"><img src={game.pic} alt="image not found" /></div>
                    <div className="right">
                        <h2>{game.name}</h2>
                            <input type='radio'  checked></input>
                            <input type='radio' checked></input>
                            <input type='radio' checked></input>
                            <input type='radio' checked></input>
                            <input type='radio' checked></input><br />

                        <big>{game.type}</big>

                    </div>
                </div>
            ))}

        </div>
    )
}
