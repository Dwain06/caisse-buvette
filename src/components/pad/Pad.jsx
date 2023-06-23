import React from 'react';

import './pad.scss';

const Pad = ({quantity, setQuantity}) => {

    const handleClickQuantity = (e) => {
        console.log(quantity)
        if (quantity === 0) {
            setQuantity(Number(e.target.innerText));
        } else if (quantity.toString().length > 4) {
            // Do nothing
        } else {
            setQuantity(Number(quantity + e.target.innerText));
        }
    }

    return (
        <div className="quantity">
            <div className="quantity-header">
                <div className="quantity-number">{quantity}</div>
                <button className="delete-btn" onClick={() => setQuantity(0)}>X</button>
            </div>
            <div className="quantity-pad">
                <div className="quantity-pad-line">
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">1</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">2</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">3</button>
                </div>
                <div className="quantity-pad-line">
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">4</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">5</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">6</button>
                </div>
                <div className="quantity-pad-line">
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">7</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">8</button>
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn">9</button>
                </div>
                <div className="quantity-pad-line">
                    <button onClick={(e) => handleClickQuantity(e)} className="quantity-number-btn zero">0</button>
                </div>
            </div>
        </div>
    );
};

export default Pad;