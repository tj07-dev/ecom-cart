import { ReactNode } from "react";
// import "./Button.module.scss"
// import './Button.css'
import { useShoppingCart } from "../context/ShoppingCartContext";
import productList from '../data/product.json'


type ButtonProps = {
    className?: string
    children?: string
    myFunction?: any
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

    const handleAddtoCartBTN = async (id: number, quantity: number) => {
        increaseCartQuantity(id);
        // console.warn(quantity);
        const data = await fetch("http://localhost:8000/cart", {
            method: "post",
            body: JSON.stringify({ id: id, stock: productList[id - 1].stock, quantity }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };



    return (
        <button className={props.className} onClick={props.myFunction} >{props.children}</button>

    )
}

export default Button

