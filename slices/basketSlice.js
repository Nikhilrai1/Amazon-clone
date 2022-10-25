import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};


const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            let findProduct = false;
            let newProduct = {
                ...action.payload,
                quantity: 1
            };
            state.items.forEach((product, i) => {
                if (product.id === action.payload.id) {
                    product.quantity += 1;
                    findProduct = true;
                    return;
                }
            })
            if (findProduct === false) {
                state.items.push(newProduct)
            }
        },
        removeFromBasket: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload.id)
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total += (item.price * item.quantity), 0);
export const selectTotalItem = (state) => state.basket.items.reduce((total, item) => total += item.quantity, 0);


export default basketSlice.reducer;