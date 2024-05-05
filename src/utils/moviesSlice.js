import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        PopularMovies:null,
        UpComing:null,
        Bollywood:null,
        type:false,
    },
    reducers:{
        addNowMovies:(state,action)=>{
        state.NowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
            },
        addUpComing:(state,action)=>{
                state.UpComing=action.payload;
                },
       addNowBollyMovies:(state,action)=>{
                    state.Bollywood=action.payload;
                    },     
    addtype:(state,action)=>{
                        state.type=action.payload;
                        },   
    }

});
export const {addNowMovies,addPopularMovies,addUpComing,addNowBollyMovies,addtype} = moviesSlice.actions;
export default moviesSlice.reducer;