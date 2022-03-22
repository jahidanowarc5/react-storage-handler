
import React from 'react';
import { add, multiply } from '../../Utilities/Utilities';

const Shoes = () => {
    const first = 12;
    const second = 12;
    const result = multiply(first, second);
    const sum = add(first, second)

    return (
        <div>
            <h3>this is my shoes compo</h3>
            <p>result:{result} total:{sum}</p>
        </div>
    );
};

export default Shoes;