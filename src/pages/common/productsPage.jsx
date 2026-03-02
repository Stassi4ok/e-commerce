import products from "../../data/products.json";
import Heart from "../../assets/SVG/heart.svg?react"
import { Link, useParams } from "react-router-dom";
import './productsPage.css'

export function ProductCard({product}){
    return(
        <article className="product-card main-page" >
            
            <div className="image-container">
                <Link to={`/product/${product.id}`}> <img src={product.image} alt={product.name} width="300" /></Link>
                <div className="icon-container" >
                    <Heart />
                </div>
                <button className="add-btn">Add to Cart</button>
            </div>
            <div className="dividing-ine"></div>
            
            <h2 className="title-16 medium">{product.name}</h2>
            <p className="title-16 medium">${product.price}</p>
          
        </article>
    );
}

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