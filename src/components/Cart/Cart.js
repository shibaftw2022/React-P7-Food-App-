
import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = (props) =>{
    const cartItems = <ul className={classes['cart-items']}> {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li key={item.id}>{item.name}</li>)} </ul>;

    return (
        <Modal onClose={props.hideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.36</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
                <button className={classes.button} onClick={props.hideCartHandler}>Order</button>
            </div>
        </Modal>

    );

};

export default Cart;