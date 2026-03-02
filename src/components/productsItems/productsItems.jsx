import {ProductCard} from '../cardProduct/cardProduct'
import {COMMON_ROUTES} from '../../router/routesName'
import products from "../../data/products.json";
import {getRandomItems} from '../../utils/getRandomItems'
import {useMemo } from "react";
import {Link } from "react-router-dom";
import './productsItems.css'

export function ProductsItems({quantity}){

    const relatedProducts = useMemo(() => {
        return getRandomItems(products, quantity);
    }, [quantity]);

    return (
        <section className="products-item-container">
            <div className="related-title">
                <div className="related-decor"></div>
                <p className="title-16 txt-SemiBold txt-clr3">
                    All products
                </p>
            </div>

            <div className="related-products">
                {relatedProducts.map(product => (
                    <ProductCard 
                        product={product} 
                        key={product.id} 
                    />
                ))}
            </div>
            <Link to={COMMON_ROUTES.PRODUCTS}><button className="btn solid all-products-btn">View All Products</button></Link>
            
        </section>
    );
}