import {Outlet} from 'react-router-dom'
import {Header} from './header/header'
import {Footer} from './footer/footer'
import './template.css'
export function Template(){
    return(
        <div className="page">
            <Header />   
            <div className="page-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
