import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Ring');
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond Ring';

    const handleHouseCount = () => {
        const newHOuseCount = house + 1;
        setHouse(newHOuseCount);
    }
    return (
        <RingContext.Provider value='alur ring'>
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
        </RingContext.Provider>
    );
};

export default Grandpa;