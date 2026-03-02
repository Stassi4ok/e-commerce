import {COMMON_ROUTES} from '../../router/routesName'
import {Link} from 'react-router-dom'
import CellPhone from '../../assets/SVG/cellPhone.svg?react'
import Camera from '../../assets/SVG/camera.svg?react'
import Computer from '../../assets/SVG/computer.svg?react'
import Gamepad from '../../assets/SVG/gamepad.svg?react'
import HeadPhones from '../../assets/SVG/headPhones.svg?react'
import SmartWatch from '../../assets/SVG/smartWatch.svg?react'
import './categories.css'

export function Categories(){
    return(
        <section className="category-section">
            <div className="categories-title">
                <div className="categories-decor"></div>
                <p className="title-16 txt-SemiBold txt-clr3">
                    Categories
                </p>
            </div>
            <h1 className="title-36 txt-SemiBold">Browse By Category</h1>

            <div className="categories-products">
                <Link to={COMMON_ROUTES.PRODUCTS + '/Phones'}>
                    <article className="category-card">
                        <CellPhone className="category-card-icon"/>
                        <p className="title-16">Phones</p>
                    </article>
                </Link>
                
                <Link to={COMMON_ROUTES.PRODUCTS + '/Computers'}>
                    <article className="category-card">
                        <Computer className="category-card-icon"/>
                        <p className="title-16">Computers</p>
                    </article>
                </Link>
                

                <Link to={COMMON_ROUTES.PRODUCTS + '/SmartWatch'}>
                    <article className="category-card">
                        <SmartWatch className="category-card-icon"/>
                        <p className="title-16">SmartWatch</p>
                    </article>
                </Link>
                

                <Link to={COMMON_ROUTES.PRODUCTS + '/Camera'}>
                    <article className="category-card">
                        <Camera className="category-card-icon"/>
                        <p className="title-16">Camera</p>
                    </article>  
                </Link>
                

                <Link to={COMMON_ROUTES.PRODUCTS + '/headPhones'}>
                    <article className="category-card">
                        <HeadPhones className="category-card-icon"/>
                        <p className="title-16">HeadPhones</p>
                    </article>
                </Link>
                
                
                <Link to={COMMON_ROUTES.PRODUCTS + '/Gaming'}>
                    <article className="category-card">
                        <Gamepad className="category-card-icon"/>
                        <p className="title-16">Gaming</p>
                    </article>
                </Link>
                
            </div>

        </section>
        
    );
}