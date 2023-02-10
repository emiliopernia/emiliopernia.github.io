import { createSlice} from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value:[]},
    reducers:{
        cartItems:(state,action)=>{
            state.value = [...state.value,action.payload]
        },
        deleteItem:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {cartItems,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;