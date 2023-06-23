import { useDispatch, useSelector } from 'react-redux';
import './drink.scss';
import { createDrink, editDrink } from '../../feature/drinksSlice';

const Drink = ({drink, quantity, setQuantity}) => {

    const dispatch = useDispatch();
    const drinks = useSelector((state) => state.drinksData.drinksData);

    const handleClick = () => {

        if (quantity === 0) quantity = 1;

        const newDrink = {
            id: drink.id,
            title: drink.title,
            quantity,
            unitPrice: drink.price,
            price: (quantity * drink.price)
        }

        if (drinks.find(drink => drink.id === newDrink.id)) dispatch(editDrink(newDrink));
        else dispatch(createDrink(newDrink));
        setQuantity(0);
    }

    return (
        <div className="card-drink">
            <figure style={{borderBottom: "5px solid " + drink.color}} onClick={() => handleClick()}>
                <img src={"./assets/img/" + drink.cover} alt={"Photo " + drink.title} />
                <figcaption>
                    <h3>{drink.title}</h3>
                    <div className="price">{drink.price}<span className="devise">€</span></div>
                </figcaption>
            </figure>
            <div className="card-quantity">
                <button>-</button>
                <div className="card-number">2</div>
                <button>+</button>
            </div>
        </div>
    );
};

export default Drink;