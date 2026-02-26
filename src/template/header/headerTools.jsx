import {Link} from 'react-router'
import {USER_ROUTES,COMMON_ROUTES} from '../../router/routesName'
import {SearchInput} from './searchInput'
import Heart from '../../assets/SVG/heart.svg?react'
import Cart from '../../assets/SVG/cart.svg?react'

import {AccountDropdown} from '../../components/accountDropdown/accountDropdown'
import './headerTools.css'
export function HeaderTools(){


    return(
        <div className="headerTools-container">
            <SearchInput placeholder="What are you looking for?" />
            <Link to={COMMON_ROUTES.WISHLIST}><Heart/></Link>
            <Link to={COMMON_ROUTES.CART}><Cart /></Link>
            <AccountDropdown/>
        </div>
    );
}