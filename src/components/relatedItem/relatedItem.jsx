import {ProductCard} from '../../pages/common/productsPage'
import products from "../../data/products.json";
import './relatedItem.css'

const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export function RelatedItem(){
    const relatedProducts = getRandomItems(products, 3);

    return(
        <section>
            <div className="related-title">
                <div className="related-decor"></div>
                <p className="title-16 txt-SemiBold txt-clr3">Related Item</p>
            </div>

            <div className="related-products">
                {relatedProducts.map(product => (<ProductCard product={product} key={product.id} />))}
            </div>
        </section>
    );
}