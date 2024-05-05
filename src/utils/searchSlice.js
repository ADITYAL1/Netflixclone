import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
    showSearch:false,
    showmovies:null,
    showaiSearch:false,
    showaimovies:null,
    moviesName:null,
    
    },
    reducers:{
     ToggleshowSearch:(state,action)=>{
        state.showSearch=action.payload;
     },
     ToggleshowaiSearch:(state)=>{
      state.showaiSearch=!state.showaiSearch;
   },
     addsearchmovies:(state,action)=>{
        state.showmovies=action.payload;
     },
     addsearchaimovies:(state,action)=>{
      const {movieName,movies}=action.payload;
      state.showaimovies=movies;
      state.moviesName=movieName;
   },
    }
});
export const{ToggleshowSearch,addsearchmovies,ToggleshowaiSearch,addsearchaimovies}=searchSlice.actions;
export default searchSlice.reducer