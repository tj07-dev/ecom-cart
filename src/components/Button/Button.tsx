import { ReactNode } from "react";
import style from "./Button.module.scss"


type ButtonProps = {

    /**
    * This is predefined class selectors for styling
    */

    className: 'add2cart' | 'decreaseQ' | 'increaseQ' | 'remove' | 'cart-checkout',

    /**
   * Button contents
   */

    children?: ReactNode

    type?: string

    /**
    * This props helps in passing fuction through component
    */
    myFunction?: () => void
};

/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
    return (
        <button className={style[props.className]} onClick={props.myFunction} data-testid="ok-button">{props.children}</button>
    )
}
export default Button

