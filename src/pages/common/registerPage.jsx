import registerSide from '../../assets/image/registerSide.png'
import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import {CurrencyUser,ROLES} from '../../context/userContext'
import {COMMON_ROUTES} from '../../router/routesName'
import { useNavigate } from 'react-router-dom'
import './registerPage.css'

export function RegisterPage(){
    const { setUser } = useContext(CurrencyUser);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || [];


        const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        role: ROLES.USER,
        }

        users.push(newUser);
        setUser(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        navigate(COMMON_ROUTES.HOME);
        console.log('All users:', users)
        console.log('User registered:', newUser)
    }


    return (
        <div className="register-page-container">
            <img src={registerSide} />
            <form onSubmit={handleSubmit} className="register-container">
                <div className="register-title">
                    <h1 className="heading-36">Create an account</h1>
                    <p className="title-16">Enter your details below</p>
                </div>
                <div className="register-inputs">
                    <input 
                        className="register-input" 
                        placeholder="Name" 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    <input 
                        className="register-input" 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                </div>
                
                <div className="register-buttons">
                    <button type="submit" className="btn solid title-16">Create Account</button>
                    <div className="logIn-link-container">
                        <p>Already have account?</p>
                        <Link to={COMMON_ROUTES.LOGIN} className="logIn-link">
                            Log in
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}