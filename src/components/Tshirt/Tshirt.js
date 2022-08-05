import React from 'react';
import './Tshirt.css';

const Tshirt = (props) => {
    const { handleAddToCart, tShirt } = props;
    const { name, picture, price } = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;