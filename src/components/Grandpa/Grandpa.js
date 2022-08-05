import React, { useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';


const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond Ring';

    const handleHouseCount = () => {
        const newHOuseCount = house + 1;
        setHouse(newHOuseCount);
    }
    return (
        <div className='grandPa' >
            <h4>Grandpa</h4>
            <button onClick={handleHouseCount}>Buy A House</button>
            <p>House:{house}</p>
            <section style={{ display: 'flex' }}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Anty house={house}></Anty>
            </section>
        </div>
    );
};

export default Grandpa;