import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ornaments }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>ornaments: {ring}</p>
        </div>
    );
};

export default Special;