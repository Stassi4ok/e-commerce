import products from "../../data/products.json";
import { useParams } from "react-router-dom";
import './productsPage.css'
import {ProductCard} from '../../components/cardProduct/cardProduct'


export function ProductsPage(){
    const { category } = useParams();

    const filteredProducts = category
    ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    : products;

    return(
        <div className="product-catalog">
            {filteredProducts.map(product => (<ProductCard product={product} key={product.id} />))}
            
        </div>
    );
}