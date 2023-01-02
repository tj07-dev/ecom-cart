import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/product.json";
import "./Page.module.scss";

export function ViweCart() {
  const { cartItems, removeFromCart, cartQuantity } = useShoppingCart();

  const handleCheckout = async () => {

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
        <h1 className="cart-heading-h1">Items in the Cart</h1>
        <Button className="cart-heading-checkout" children="Check Out" myFunction={handleCheckout} />
      </div>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />

      ))}
    </>
  );
}
