import { createSlice } from "@reduxjs/toolkit";

export const drinksDataSlice = createSlice({
    name: "drinksData",
    initialState: {
        drinksData: [],
    },
    reducers: {
        setDrinks: (state, { payload }) => {
            state.drinksData = payload;
        },
        createDrink: (state, { payload }) => {
            state.drinksData.push(payload);
        },
        editDrink: (state, { payload }) => {
            state.drinksData = state.drinksData.map((drink) => {
                console.log("payload", payload)
                if (drink.id === payload.id) {
                    return {
                        ...drink,
                        quantity: drink.quantity + payload.quantity,
                        price: (drink.quantity + payload.quantity) * drink.unitPrice
                    };
                } else {
                    return drink;
                }
            });
        },
        deleteDrink: (state, { payload }) => {
            state.drinksData = state.drinksData.filter(
                (drink) => drink.id !== payload
            );
        },
    },
});

export default drinksDataSlice.reducer;
export const { setDrinks, createDrink, editDrink, deleteDrink } = drinksDataSlice.actions;
