import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart'
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const [tShirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {

        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('item already added')
        }


    }

    const handleRemoveFormCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    };
    return (
        <div className='home-container'>
            <div className="tshirt-container">

                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFormCart={handleRemoveFormCart}
                    cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Home;