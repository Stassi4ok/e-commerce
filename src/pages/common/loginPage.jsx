import loginSide from '../../assets/image/registerSide.png'
import {useContext, useState} from 'react'
import {CurrencyUser,ROLES} from '../../context/userContext'
import {COMMON_ROUTES} from '../../router/routesName'
import { useNavigate } from 'react-router-dom'
import './loginPage.css'

export function LoginPage(){
    const { setUser } = useContext(CurrencyUser);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === formData.email);
        if (!user) {
            setError("Користувач не знайдений");
            return;
        }
        if (user.password !== formData.password) {
            setError("Невірний пароль");
            return;
        }
        setUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user)); 
        setError("");
        navigate(COMMON_ROUTES.HOME);
        console.log('All users:', users)
        console.log('User current:', user)
    }

    return (
        <div className="login-page-container">
            <img src={loginSide} />
            <form onSubmit={handleSubmit} className="login-container">
                <div className="login-title">
                    <h1 className="heading-36">Log in to Exclusive</h1>
                    <p className="title-16">Enter your details below</p>
                </div>
                <div className="login-inputs">
                    <input 
                        className="login-input" 
                        placeholder="Email" 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    <input 
                        className="login-input" 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    {error && <p className="error">{error}</p>}
                </div>
                
                <div className="login-buttons">
                    <button type="submit" className="btn solid title-16">Log In</button>
                    <button className="btn title-16">Forget Password?</button>
                </div>
            </form>
        </div>
    );
}