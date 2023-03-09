import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        cartItems: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        },
        deleteItem: (state, action) => {
            state.cartItems = action.payload
        },
        modifyItem: (state, action) => {
            const updatedItem = action.payload;
            // Create a new copy of cartItems with the item updated
            const newCartItems = state.cartItems.map((item) => {
                if (item.id === updatedItem.id) {
                    return { ...item, ...updatedItem };
                }
                return item;
            });
            // Return a new state object with the updated cartItems array
            return {
                ...state,
                cartItems: newCartItems,
            };
        }
    }
})
export const { cartItems, deleteItem, modifyItem } = cartSlice.actions;
export default cartSlice.reducer;