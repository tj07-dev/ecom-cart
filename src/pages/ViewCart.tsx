import { useState } from "react";
import Button from "../components/Button/Button";
import CartItem from "../components/CartItem/CartItem";
import Toast from "../components/Toast/Toast";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./Page.module.scss";

export function ViewCart() {
  const { cartItems, removeFromCart, cartQuantity } = useShoppingCart();
  const [showAlert, setAlert] = useState(false)
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckout = async () => {

    let data = await fetch('http://localhost:8000/checkout', {
      method: 'post',
      body: JSON.stringify(cartItems),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response)
      return response.json();
    })
      .then(function (myJson) {
        setMessage(myJson.message)
        setTheme(myJson.theme)
        setAlert(true)
      });
  }
  return (
    <>
      <Toast open={showAlert} setOpen={setAlert} theme={`${theme}`} children={message} />
      {cartQuantity === 0 ? (
        <h1 className="cart-heading">No item in the Cart</h1>
      ) : (<div className="cart-heading">
        <h1 className="cart-heading-h1">Items in the Cart</h1>
        <Button className="cart-checkout" children="Check Out" myFunction={handleCheckout} />
      </div>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />

      ))}
    </>
  );
}
