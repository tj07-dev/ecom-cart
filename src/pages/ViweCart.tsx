import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/product.json";
import "./Page.module.scss";

export function ViweCart() {
  const { cartItems, removeFromCart, cartQuantity } = useShoppingCart();

  return (
    <>
      {cartQuantity === 0 ? (
        <h1 className="cart-heading">No item in the Cart</h1>
      ) : (
        <h1 className="cart-heading">Items in the Cart</h1>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </>
  );
}
