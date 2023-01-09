import { useShoppingCart } from "../../context/ShoppingCartContext";
import classes from "./Card.module.scss";
import productlist from "../../data/product.json";
import Button from "../Button/Button";
import Toast from "../Toast/Toast";
import { useState } from "react";

type ProductItemProps = {
  /**
* Special Identifer for the listed product.
*/
  id: number;
  /**
* Image of the listed Product.
*/
  img: string;
  /**
* Name of the Product.
*/
  name: string;
  /**
* Price of the product.
*/
  price: number;
  /**
* Details/description about the prodcut.
*/
  description: string;
  /**
* Number of quantity available for the particular product.
*/
  stock: number;
};
const Card = ({ id, img, name, price, description, stock }: ProductItemProps) => {
  const [showAlert, setAlert] = useState(false)
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');
  const [outofStock, seToutofStock] = useState(false)
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
    }).then(function (response) {

      return response.json();
    })
      .then(function (myJson) {
        setMessage(myJson.message)
        setTheme(myJson.theme)
        setAlert(true)
      });
  };
  const handleOutOfStock = async (id: number) => {
    // console.warn(quantity);
    const data = await fetch("http://localhost:8000/cart", {
      method: "post",
      body: JSON.stringify({ id: id, stock: productlist[id - 1].stock, quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      console.log(response)
      return response.json();
    })
      .then(function (myJson) {
        setMessage(myJson.message)
        setTheme(myJson.theme)
        setAlert(true)
        seToutofStock(true)
      });
    console.log(data)
  };

  const handleRemoveFromCart = async (id: number) => {
    decreaseCartQuantity(id);
    // console.warn(quantity);
    await fetch("http://localhost:8000/cartRemove", {
      method: "post",
      body: JSON.stringify({ id: id, stock: productlist[id - 1].stock, quantity }),
      headers: {
        "Content-Type": "application/json",
        'char-set': "utf-8"
      },
    }
    ).then(function (response) {
      console.log(response)
      return response.json();
    })
      .then(function (myJson) {
        setMessage(myJson.message)
        setTheme(myJson.theme)
        setAlert(true)
      });

  };

  return (
    <div data-testId='div' className={classes.card}>
      <Toast open={showAlert} setOpen={setAlert} theme={`${theme}`} children={message} />
      <img src={img} className={classes.card__img} alt={name} />
      <div className={classes.card__body}>
        <h2 className={classes.card__body__title}>{name}</h2>
        <p className={classes.card__body__description}>{description}</p>
        <h3 className={classes.card__body__price}>{price}</h3>
        {quantity === 0 ? (
          <>
            {stock == 0 ? (<>
              {!outofStock ?
                <Button className="add2cart" children="Add to cart" myFunction={() => handleOutOfStock(id)} /> :
                <h2 className={classes.card__body__outofstock}>Out of Stock</h2>}</>
            ) : (
              <Button className="add2cart" children="Add to cart" myFunction={() => handleAddtoCart(id)} />
            )}
          </>
        ) : (
          <div className={classes.card__body__quantity}>
            <div className={classes.card__body__quantity__quatityBTN}>
              <Button className="increaseQ" children="-" myFunction={() => handleRemoveFromCart(id)} />
              <p>
                <span>{quantity}</span> in cart.
              </p>
              {quantity < stock ? (
                <Button className="decreaseQ" children="+" myFunction={() => handleAddtoCart(id)} />
              ) : (
                <button disabled>+</button>
              )}
            </div>
            <Button className="remove" children="Remove" myFunction={() => removeFromCart(id)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
