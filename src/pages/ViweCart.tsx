import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/product.json";
import "./Page.module.scss";

export function ViweCart() {
  const { cartItems, removeFromCart, cartQuantity } = useShoppingCart();

  const handleCHeckout = async () => {

    let data = await fetch('http://localhost:8000/checkout', {
      method: 'post',
      body: JSON.stringify(cartItems),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(JSON.stringify(cartItems))
  }
  return (
    <>
      {cartQuantity === 0 ? (
        <h1 className="cart-heading">No item in the Cart</h1>
      ) : (<div className="cart-heading">
        <h1 className="cart-heading-h1">Items in the Cart</h1><button className="cart-heading-checkout" onClick={handleCHeckout}>Check Out</button></div>
      )}
      {cartItems.map((item, index) => (<>
        <CartItem key={index} {...item} />
      </>
      ))}
    </>
  );
}
