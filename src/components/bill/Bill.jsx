import React, { useEffect, useState } from "react";
import "./bill.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteDrink } from "../../feature/drinksSlice";

const Facture = () => {

    const drinks = useSelector((state) => state.drinksData.drinksData);
    const dispatch = useDispatch();

    const [totalDrinks, setTotalDrinks] = useState(0);
    
    useEffect(() => {
        let total = 0;
        drinks.map((drink) => total += drink.price)
        setTotalDrinks(total)
    }, [drinks]);

    const handleDelete = (id) => {
        dispatch(deleteDrink(id));
    }

    return (
        <div className="bill">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th className="table-wrapper_quantity">Qté</th>
                            <th className="table-wrapper_drink">Boisson</th>
                            <th>PU</th>
                            <th>Prix</th>
                            <th>Supp.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drinks.map((drink) => (
                            <tr key={drink.id}>
                                <td>{drink.quantity}</td>
                                <td>{drink.title}</td>
                                <td>{drink.unitPrice}&nbsp;€</td>
                                <td>{drink.price}&nbsp;€</td>
                                <td onClick={() => handleDelete(drink.id)} className="delete-row" ><button className="delete-btn">X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="bill_total">
                    <span>TOTAL</span><span>{totalDrinks}&nbsp;€</span>
                </div>
            </div>
        </div>
    );
};

export default Facture;
