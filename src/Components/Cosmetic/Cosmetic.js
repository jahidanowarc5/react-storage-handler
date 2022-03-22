
import React from 'react';
import { addToDb, removeCartDb } from '../../Utilities/Fakestorage';


import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const add = (id) =>{
        addToDb(id)
    }
    const removeFromCart = id => {
        removeCartDb(id)
    }
    
    return (
        <div className='product'>
            <h2>Product name: {name}</h2>
            <p>Product price: {price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={() => add(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;