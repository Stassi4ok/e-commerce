import {Link} from 'react-router-dom'
import Heart from '../../assets/SVG/heart.svg?react'
import { useState, useEffect } from "react";
import './cardProduct.css'

export function ProductCard({product}){
    return(
        <article className="product-card main-page" >
            
            <div className="image-container">
                <Link to={`/product/${product.id}`}> <img src={product.image} alt={product.name} width="300" /></Link>
                <div className="icon-container" >
                    <AddToWishlistBtn productId={product.id} />
                </div>
                <button className="add-btn">Add to Cart</button>
            </div>
            <div className="dividing-ine"></div>
            
            <h2 className="title-16 medium">{product.name}</h2>
            <p className="title-16 medium">${product.price}</p>
          
        </article>
    );
}

export function AddToWishlistBtn({ productId }) {
  const [flag, setFlag] = useState(false);

  
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setFlag(savedWishlist.includes(productId));
  }, [productId]);

  const handle = () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedWishlist;

    if (flag) {
      
      updatedWishlist = savedWishlist.filter(id => id !== productId);
    } else {
      
      updatedWishlist = [...savedWishlist, productId];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setFlag(!flag);
  };

  return (
    <button className="addTo-Wishlist-Btn" onClick={handle}>
      <Heart className={`addTo-Wishlist-icon ${flag ? "active" : ""}`} />
    </button>
  );
}