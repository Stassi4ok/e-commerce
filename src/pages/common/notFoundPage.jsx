import {NavLink} from 'react-router-dom'
import {COMMON_ROUTES} from '../../router/routesName'
import './notFoundPage.css'
export function NotFoundPage(){
    return(
        <div className="not-found-container">
            <h1 className="heading-110 medium">404 Not Found</h1>
            <p className="title-16 regular">Your visited page not found. You may go home page.</p>
            <NavLink 
                to={COMMON_ROUTES.HOME} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
            <button 
            className="btn-back-404"
            >Back to home page
            </button></NavLink>
           
        </div>
    );
}