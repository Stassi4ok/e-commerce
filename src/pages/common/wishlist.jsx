import products from "../../data/products.json";
import {ProductCard} from "../../components/cardProduct/cardProduct"
import './wishlist.css'



export function Wishlist() {
  const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const wishProducts = products.filter(product => savedWishlist.includes(product.id));

  if (wishProducts.length === 0) return <p>Wishlist is empty</p>;

  return (
    <section className="wishlist-container">
      {wishProducts.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}
export function WishlistPage(){
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    return(
      <main className="main-page">
          <div>
              <p className="title-20px">Wishlist ({savedWishlist.length})</p>
          </div>
          <Wishlist/>
      </main>



            
    );
}

