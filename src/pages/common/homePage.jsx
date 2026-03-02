import {Categories} from '../../components/categories/categories'
import homeBannerImg from '../../assets/image/homeBanner.png'
import {ProductsItems} from '../../components/productsItems/productsItems'
import {Link} from 'react-router'
import './homePage.css'

export function HomePage(){

    return(
        <main className="main-page">
            <section className="banner-container">
                <Link to="/product/1"><img  src={homeBannerImg} /></Link>
            </section>
            
            <ProductsItems quantity={3} />

            <Categories/>
            
        </main>

        
    );
}