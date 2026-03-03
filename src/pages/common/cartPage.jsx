import products from '../../data/products.json'
import {useState} from 'react'
import Cancel from '../../assets/SVG/cancel.svg?react'
import './cartPage.css'

export function CartTable() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  
  function removeFromCart(productId) {
    const updatedCart = cart.filter(
      item => item.productId !== productId
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  
  const cartProducts = cart.map(cartItem => {
    const product = products.find(
      product => product.id === cartItem.productId
    );

    return {
      ...product,
      quantity: cartItem.quantity
    };
  });

  if (cartProducts.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th><p className="txt-regular ">Product</p></th>
          <th><p className="txt-regular ">Price</p></th>
          <th><p className="txt-regular ">Quantity</p></th>
          <th><p className="txt-regular ">Subtotal</p></th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map(product => (
          <tr key={product.id}>
            <td>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                <Cancel className="remove-btn-icon"/>
              </button>
            </td>
            <td>
              <div className="cart-product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
            </td>
            <td className="product-title-cart-table">

              {product.name}
            </td>

            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${(product.price * product.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CartPage(){

    return(
        <main className="main-page">
            <CartTable/>
        </main>
        
    );
}