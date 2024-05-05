import { createSlice } from "@reduxjs/toolkit";

const tvSlice=createSlice({
    name:"tv",
    initialState:{
        NowPlayingTv:null,
        TopRated:null,
        Popular:null,
        Hindi:null,
       
    },
    reducers:{
        addNowTv:(state,action)=>{
        state.NowPlayingTv=action.payload;
        },
        addTopRated:(state,action)=>{
            state.TopRated=action.payload;
            },
       addPopular:(state,action)=>{
                state.Popular=action.payload;
                },
        addHinditv:(state,action)=>{
                    state.Hindi=action.payload;
                    },        
       
    }

});
export const {addNowTv,addTopRated,addPopular,addHinditv} = tvSlice.actions;
export default tvSlice.reducer;