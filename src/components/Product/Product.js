import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, price, stock, seller, star} = props.product;
    // FontAwesome
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>By: {seller}</p>
                <p>Price: {price}</p>
                <p>
                    <small>
                        Only {stock} left in stock - Order Soon
                    </small>
                </p>
                <Rating 
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    initialRating={star}
                    readonly 
                />
                <br />
                <button className="purchase-btn"
                onClick={() => props.handleAddToCart(props.product)}
                >{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;