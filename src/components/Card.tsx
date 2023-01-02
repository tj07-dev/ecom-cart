import { useShoppingCart } from "../context/ShoppingCartContext";
import classes from "./Card.module.scss";
import productlist from "../data/product.json";
import Button from "./Button";

type ProductItemProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  stock: number;
};
const Card = ({ id, img, name, price, description, stock }: ProductItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleAddtoCart = async (id: number) => {
    increaseCartQuantity(id);
    // console.warn(quantity);
    const data = await fetch("http://localhost:8000/cart", {
      method: "post",
      body: JSON.stringify({ id: id, stock: productlist[id - 1].stock, quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(data);
  };
  const handleOutOfStock = async (id: number) => {
    // console.warn(quantity);
    const data = await fetch("http://localhost:8000/cart", {
      method: "post",
      body: JSON.stringify({ id: id, stock: productlist[id - 1].stock, quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  };

  const handleRemoveFromCart = async (id: number) => {
    decreaseCartQuantity(id);
    // console.warn(quantity);
    const data = await fetch("http://localhost:8000/cartRemove", {
      method: "post",
      body: JSON.stringify({ id: id, stock: productlist[id - 1].stock, quantity }),
      headers: {
        "Content-Type": "application/json",
        'char-set': "utf-8"
      },
    });
    // console.log(data);
  };

  return (
    <div className={classes.card}>
      <img src={img} className={classes.card__img} alt={name} />
      <div className={classes.card__body}>
        <h2 className={classes.card__body__title}>{name}</h2>
        <p className={classes.card__body__description}>{description}</p>
        <h3 className={classes.card__body__price}>{price}</h3>
        {quantity === 0 ? (
          <>
            {stock == 0 ? (
              // <button className={classes.card__body__a2cbtn} onClick={() => handleOutOfStock(id)}>
              //   Add to cart
              // </button>
              <Button className="a2cbtn" children="Add to cart" myFunction={() => handleOutOfStock(id)} />
            ) : (
              // <button className={classes.card__body__a2cbtn} onClick={() => handleAddtoCart(id)}>
              //   Add to cart
              // </button>
              <Button className="a2cbtn" children="Add to cart" myFunction={() => handleAddtoCart(id)} />
            )}
          </>
        ) : (
          // <Button className=".a2cbtn" onClick={handleRemovetoCart} />
          <div className={classes.card__body__quantity}>
            <div className={classes.card__body__quantity__quatityBTN}>
              <Button children="-" myFunction={() => handleRemoveFromCart(id)} />
              {/* <button onClick={() => handleRemoveFromCart(id)}>-</button> */}
              <p>
                <span>{quantity}</span> in cart.
              </p>
              {quantity < stock ? (
                // <button onClick={() => handleAddtoCart(id)}>+</button>
                <Button children="+" myFunction={() => handleAddtoCart(id)} />
              ) : (
                <button disabled>+</button>
              )}
            </div>
            <Button children="Remove" myFunction={() => removeFromCart(id)} />
            {/* <button onClick={() => removeFromCart(id)}>Remove</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
