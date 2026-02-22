import {Link} from 'react-router'
import {Navigation} from './navigation'
export function Header(){

    return(
        <header>
            <Link><h1>E-commerce</h1></Link>
            <Navigation />
        </header>
    );
}