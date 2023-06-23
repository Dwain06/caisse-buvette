import { useState } from 'react';

import Drink from '../drink/Drink';
import Pad from '../pad/Pad';

import './drinks.scss';

import { drinksData } from '../../assets/data/drinksData';

const Drinks = () => {

    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <div className="main-selection">
                <h1>Buvette - Big Reggae Fastival</h1>
                <div className="drinks">
                    <div className="drinks-container">
                        {drinksData.map((drink) => (
                                <Drink key={drink.id} drink={drink} quantity={quantity} setQuantity={setQuantity} />
                        ))}
                    </div>
                </div>
                {/* <Pad quantity={quantity} setQuantity={setQuantity} /> */}
            </div>
        </>
    );
};

export default Drinks;