import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = (props) => {
    const {name,price,ratings,img,seller,id} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className="product-price">Price: ${price}</p>
                <p className="product-manufacture">Manufacturer: {seller}</p>
                <p className="product-ratings">Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => props.handelAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
        </div>
    );
};

export default Product;