
import React, {useContext} from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) =>{
    const ctx = useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const cartItemRemoveHandler = (id) =>{
        ctx.removeItem(id);

    };

    const cartItemAddHandler = (item) =>{
        ctx.addItem(item);
    };

    const hasItems = ctx.items.length >0;
    const cartItems = <ul className={classes['cart-items']}> {ctx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>)} </ul>;

    return (
        <Modal onClose={props.hideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>

    );

};

export default Cart;