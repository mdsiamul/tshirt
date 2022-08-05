import React from 'react';

const Cart = ({ cart, handleRemoveFormCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one item!!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else { command = <p> Thanks for adding item</p> }


    return (

        <div>
            <h2>Items Selected: {cart.length}</h2>
            {command}
            {cart.map(tShirt => <p>{tShirt.name}
                <button onClick={() => handleRemoveFormCart(tShirt)}> X</button>

            </p>)}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;