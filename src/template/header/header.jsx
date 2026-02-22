import {Link} from 'react-router-dom'
import {HeaderTools} from './headerTools'
import {Navigation} from './navigation'
import {COMMON_ROUTES} from '../../router/routesName'
import '../../css/typography.css'
import './header.css'
export function Header(){

    return(
        <div>
            <div className="top-header">
                <div className="title">
                    <p className="title-14 txt-regular txt-clr">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link to={COMMON_ROUTES.PRODUCTS}><h1 className="title-14 txt-regular txt-clr underline">ShopNow</h1></Link>
                </div>
                
            </div>

            <header className="header-container">
                <Link to={COMMON_ROUTES.HOME}><p className="heading-24 txt-bold txt-clr2">E-commerce</p></Link>
                <Navigation />
                <HeaderTools />
            </header>
        </div>
    );
}