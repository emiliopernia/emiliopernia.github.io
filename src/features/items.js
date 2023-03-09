import { createSlice} from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {value:[]},
    reducers:{
        getItems:(state,action)=>{
            let products = action.payload;
            const alteredProducts= products.map((item)=> ({...item,max:4, 'size':{'small':'s','medium':'m', 'large':'l','extraLarge':'xl'},cartQuantity:1}))
            state.value = alteredProducts
        }
    }
})
export const {getItems} = itemsSlice.actions;
export default itemsSlice.reducer;