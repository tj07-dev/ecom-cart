import { useShoppingCart } from "../../context/ShoppingCartContext";
import products from "../../data/product.json";
import Button from "../Button/Button";
import classes from "./CartItem.module.scss";

type ShoppingCartProps = {
  /**
* Special Idetifiers of the product added in the cart.
*/
  id: number;
  /**
* Number of product added in cart.
*/
  quantity: number;
};

const CartItem = ({ id, quantity }: ShoppingCartProps) => {
  const { cartItems, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
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
        <p>{item.description}</p>
        <div className={classes.card__body__quantity__quatityBTN}>

          <Button className="decreaseQ" children="-" myFunction={() => decreaseCartQuantity(id)} />
          <p>
            <span>{quantity}</span> in cart.
          </p>
          {quantity < item.stock ? <Button className="increaseQ" children="+" myFunction={() => increaseCartQuantity(id)} /> : <button disabled>+</button>}
        </div>
        <Button className="remove" children="Remove" myFunction={() => removeFromCart(id)} />
        <div><h3>Total : {item.price * quantity}</h3></div>
      </div>
    </div>
  );
};

export default CartItem;
