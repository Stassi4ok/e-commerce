import { useParams } from "react-router-dom";
import {RelatedItem} from '../../components/relatedItem/relatedItem'
import {useState} from 'react'
import {AddToWishlistBtn} from '../../components/cardProduct/cardProduct'
import products from "../../data/products.json";
import {CountQuantity} from "../../components/countQuantity/countQuantity"
import Heart from '../../assets/SVG/heart.svg?react'

import "./productPage.css"




export function ProductPage() {
  const [quantityProduct, setQuantityProduct] = useState(1);
  
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  

  return (
    <div className="main-page"> 
      <section className="product-container ">
        <div className="product-img">
          <img src={product.image} />
        </div>
        <div className="product-title-container">
          <h1 className="heading-24 semiBold">{product.name}</h1>
          <p className="heading-24">${product.price}</p>
          <p className="title-14">{product.description}</p>
          <div className="dividing-ine"></div>
          <div className="buy-panel">
              <CountQuantity 
                value={quantityProduct} 
                onChange={setQuantityProduct}  
              />

              
              <AddToCartQuantity 
                productId={product.id}
                quantity={quantityProduct}
              />
              
                
            <AddToWishlistBtn productId={product.id}/>
                
              
                
              
          </div>
          
        </div>
        

      </section>
      
      <RelatedItem quantity={3} />
      
      
    </div>
  );
}

function AddToCartQuantity({productId, quantity}){
  function addToCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = savedCart.find(
      item => item.productId === productId
    );

    let updatedCart;

    if (existingProduct) {
      
      updatedCart = savedCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
     
      updatedCart = [
        ...savedCart,
        {
          productId,
          quantity: quantity
        }
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  return(
    <button 
      className="btn solid title-16 medium"
      onClick={addToCart}
    >
      Buy Now
    </button>
  );
}