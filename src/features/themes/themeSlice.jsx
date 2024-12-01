import { createSlice } from "@reduxjs/toolkit";

const themeSlice  = createSlice({
    name:"theme",
    initialState:{value:""},
    reducers:{
        theme:(state, action) =>{
            state.value = action.payload;
        }
    }
})



export const {theme } = themeSlice.actions
export default themeSlice.reducer;
