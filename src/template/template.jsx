import {Outlet} from 'react-router-dom'
import {Header} from './header/header'
export function Template(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}
