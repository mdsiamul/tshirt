import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornaments }) => {
    return (
        <div>
            <h2>Me</h2>
            <p>House: {house}</p>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default MySelf;