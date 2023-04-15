import { useState,useEffect } from 'react'
import './Sidenav.css'

//images 
import sonic from '../images/sonic.jpg'
import mariopro from '../images/mariorealpro.webp'
import waluigi from '../images/waluigi.webp'
import kirby from '../images/kirby2.png'
import bowser from '../images/bowser.png'
import arrowright from '../images/thinarrow.png'

export default function Sidenav() {


   

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        if (open === false) {
            setOpen(true)
        }
        else
            setOpen(false)
    }

    return (
        <div className={open ? 'sidenav' : 'sidenavClosed'}>
            <p className='topic'>Friends</p>
            <div className="person person-1" ><img className='sidebar-pic' src={sonic} alt="not found" />{open && <p>Tenzin Choeyang</p> } <span className="status status-1"></span> </div>
            <div className="person person-2"><img className='sidebar-pic' src={mariopro} alt="not found" />{open && <p>Evil Monster</p> } <span className="status status-2"></span></div>
            <div className="person person-3"><img className='sidebar-pic' src={waluigi} alt="not found" />{open && <p>Darrk Angel</p> } <span className="status status-3"></span></div>
            <div className="person person-4"><img className='sidebar-pic' src={kirby} alt="not found" />{open && <p>Mama Mario</p> } <span className="status status-4"></span></div>
            <div className="person person-5"><img className='sidebar-pic' src={bowser} alt="not found" />{open && <p>Noob masta 69</p> } <span className="status status-5"></span></div>

            <div className="sidenav-button" onClick={toggleOpen}><button><img src={arrowright} alt="not found" className={open? 'rotate': ''} /></button></div>

        </div>
    )
}
