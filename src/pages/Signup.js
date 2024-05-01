import './Signup.css'

import home from '../images/homebutton.png'
import { NavLink } from 'react-router-dom'

import smash from '../images/smashbros.jpg'

export default function Signup() {
    return (
        <div className="signup">
            <NavLink to="/"> <img src={home} className='homebutton' alt="not found" /> </NavLink>

            <div className="container">
                <div className="left">
                    <img src={smash} alt="not found" />
                </div>
                <div className="right">

                    <form>
                        <h1>Registration</h1>
                        <label>
                            Full Name
                            <input type="text" />
                        </label>

                        <label>
                            E-mail <input type="email" placeholder='example@gmail.com' />
                        </label>
                        <label>
                            Password: <input type="password" />
                        </label>
                        <label>
                            Confirm Password: <input type="password" />
                        </label>

                        <label>
                            Phone No <input type="text" />
                        </label>

                        <label>
                            Address <input type="text" placeholder='(Optional)' />
                        </label>

                        <NavLink to='/login' className="already">Already have an Account? Log in</NavLink>

                        <button className="signupButton">Sign up</button>

                    </form>

                </div>
            </div>
        </div>
    )
}
