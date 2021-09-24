import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props; 

    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1: product.quantity;
        total = (total + product.price) * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shippingCost = total > 0 ?20: 0;
    const totalBeforeTax = total + shippingCost;
    const tax = (total + shippingCost) * 0.3;

    const orderTotal = total + shippingCost + tax;
    return (
        
        <div className="cart">
            <div className="cart-heading">
                <h2>Order Summery</h2>
                <h4>Items Ordered {totalQuantity}
                </h4>
            </div>
            <div className="cart-value">
                <p>Items: {total.toFixed(2)}</p>
                <p>Shipping Cost: {shippingCost.toFixed(2)}</p>
                <p>Total Before Tax: {totalBeforeTax.toFixed(2)}</p>
                <p>Estimated Tax: {tax.toFixed(2)}</p>
                <h3>Order Total: {orderTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;