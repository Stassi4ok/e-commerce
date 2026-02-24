import loginSide from '../../assets/image/registerSide.png'
import './loginPage.css'

export function LoginPage(){
    return (
        <div className="login-page-container">
            <img src={loginSide} />
            <div className="login-container">
                <div className="login-title">
                    <h1 className="heading-36">Log in to Exclusive</h1>
                    <p className="title-16">Enter your details below</p>
                </div>
                <div className="login-inputs">
                    <input className="login-input" placeholder="Email or Phone Number" />
                    <input className="login-input" type="password" placeholder="Password" />
                </div>
                
                <div className="login-buttons">
                    <button className="btn solid title-16">Log In</button>
                    <button className="btn title-16">Forget Password?</button>
                </div>
            </div>
        </div>
    );
}