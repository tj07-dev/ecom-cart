import { ReactNode } from "react";
// import "./Button.module.scss"
// import './Button.css'
import { useShoppingCart } from "../context/ShoppingCartContext";
import productList from '../data/product.json'


type ButtonProps = {
    className: string
    children?: string
    onClick?: () => void
    id?: number
    quantity?: number
    data?: () => (void | undefined)
};


const Button = (props: ButtonProps) => {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();



    return (<>
        <button className={props.className} onClick={props.onClick} >{props.children}</button>
    </>
    )
}

export default Button

