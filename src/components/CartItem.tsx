import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/product.json";
import classes from "./CartItem.module.scss";
type ShoppingCartProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: ShoppingCartProps) => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className={classes.card}>
      <img src={item.img} className={classes.card__img} />
      <div className={classes.card__body}>
        <h2 className={classes.card__body__title}>
          {item.name}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }}>x{quantity}</span>
          )}
        </h2>
        <h3 className={classes.card__body__price}>{item.price}</h3>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
      <div><h2>{item.price * quantity}</h2></div>
    </div>
  );
};

export default CartItem;
