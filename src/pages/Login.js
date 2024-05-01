import './Login.css'
//images
import home from '../images/homebutton.png'
import { NavLink } from 'react-router-dom'

import marioprofile from '../images/superprofile.png'

export default function Login() {
    return (
        <div className='login'>
            <div className="login-form">
                <NavLink to="/"> <img src={home} className='homebutton' alt="not found"/> </NavLink>
                <form>
                    <img src={marioprofile} alt="not found" />
                    <h1>Welcome Back</h1>
                    <label>
                        UserName<input type="text" />
                    </label>
                    <label>
                        Password <input type="password" />
                    </label>

                    <button>Login</button>

                    <NavLink to="/signup">Create Account ?</NavLink>
                </form>
            </div>
        </div>
    )
}
