import { useShoppingCart } from "../context/ShoppingCartContext";
import classes from "./Card.module.scss";

type ProductItemProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  stock: number;
};
const Card = ({
  id,
  img,
  name,
  price,
  description,
  stock,
}: ProductItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className={classes.card}>
      <img src={img} className={classes.card__img} />
      <div className={classes.card__body}>
        <h2 className={classes.card__body__title}>{name}</h2>
        <p className={classes.card__body__description}>{description}</p>
        <h3 className={classes.card__body__price}>{price}</h3>
        {stock === 0 ? (
          <h3 className={classes.card__body__stock}>Out of Stock</h3>
        ) : quantity === 0 ? (
          <button
            className={classes.card__body__a2cbtn}
            onClick={() => increaseCartQuantity(id)}
          >
            Add to cart
          </button>
        ) : (
          <div className={classes.card__body__quantity}>
            <div className={classes.card__body__quantity__quatityBTN}>
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <p>
                <span>{quantity}</span> in cart.
              </p>
              <button onClick={() => increaseCartQuantity(id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
