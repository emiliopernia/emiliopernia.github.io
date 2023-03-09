import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value:null},
    reducers:{
        loadUser:(state,action)=>{
            state.value = action.payload;
        },
        logoutUser:(state, action)=>{
            state.value = action.payload
        }
    }
})
export const {loadUser,logoutUser} = userSlice.actions;
export default userSlice.reducer;