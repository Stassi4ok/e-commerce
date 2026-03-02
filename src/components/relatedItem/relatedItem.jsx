import {ProductCard} from '../cardProduct/cardProduct'
import products from "../../data/products.json";
import {getRandomItems} from '../../utils/getRandomItems'
import {useMemo } from "react";
import './relatedItem.css'


export function RelatedItem({ quantity }) {

    const relatedProducts = useMemo(() => {
        return getRandomItems(products, quantity);
    }, [quantity]);

    return (
        <section>
            <div className="related-title">
                <div className="related-decor"></div>
                <p className="title-16 txt-SemiBold txt-clr3">
                    Related Item
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
        </section>
    );
}