import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
    showlang:"en",
    
    },
    reducers:{
     ChangeLanguage:(state,action)=>{
        state.showlang=action.payload;
     },
     
    }
});
export const{ChangeLanguage}=configSlice.actions;
export default configSlice.reducer