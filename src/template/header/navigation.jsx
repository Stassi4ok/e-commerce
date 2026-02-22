import {Link} from 'react-router'
import {COMMON_ROUTES} from '../../router/routesName'
export function Navigation(){

    return(
        <div>
            <Link to={COMMON_ROUTES.HOME}>Home</Link>
            <Link to={COMMON_ROUTES.CONTACT}>Contact</Link>
            <Link to={COMMON_ROUTES.ABOUT}>About</Link>
            <Link to={COMMON_ROUTES.REGISTER}>Sign Up</Link>
        </div>
    );
}