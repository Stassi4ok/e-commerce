import {NavLink} from 'react-router-dom'
import {COMMON_ROUTES} from '../../router/routesName'
import './navigation.css'
export function Navigation(){

    return(
        <div className="navigation-container">
            <NavLink 
                to={COMMON_ROUTES.HOME} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >Home</NavLink>
            <NavLink 
                to={COMMON_ROUTES.CONTACT} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >Contact</NavLink>
            <NavLink
                to={COMMON_ROUTES.ABOUT} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >About</NavLink>
            <NavLink 
                to={COMMON_ROUTES.REGISTER} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >Sign Up</NavLink>
        </div>
    );
}