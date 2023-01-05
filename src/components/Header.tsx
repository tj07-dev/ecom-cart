import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Add2Cart
        </Link>
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
          </ul>
          <Link className={classes.header__content__nav__Link} to="/viweCart">
            <button className={classes.header__content__nav__Link__header} >
              Viwe Cart
              <div className={classes.header__content__nav__cartQuantity}>
                {cartQuantity}
              </div>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
