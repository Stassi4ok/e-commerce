import registerSide from '../../assets/image/registerSide.png'
import {Link} from 'react-router-dom'
import {COMMON_ROUTES} from '../../router/routesName'
import './registerPage.css'

export function RegisterPage(){
    return (
        <div className="register-page-container">
            <img src={registerSide} />
            <div className="register-container">
                <div className="register-title">
                    <h1 className="heading-36">Create an account</h1>
                    <p className="title-16">Enter your details below</p>
                </div>
                <div className="register-inputs">
                    <input className="register-input" placeholder="Name" />
                    <input className="register-input" type="password" placeholder="Email or Phone Number" />
                    <input className="register-input" type="password" placeholder="Password" />
                </div>
                
                <div className="register-buttons">
                    <button className="btn solid title-16">Create Account</button>
                    <div className="logIn-link-container">
                        <p>Already have account?</p>
                        <Link to={COMMON_ROUTES.LOGIN} className="logIn-link">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}