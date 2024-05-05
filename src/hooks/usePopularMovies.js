 import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {  addPopularMovies } from "../utils/moviesSlice";
import { API_option } from "../utils/constants";
  
  const usePopularMovies = () => {
    
  
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
       API_option);
      const json=await data.json();
      
 
      dispatch(addPopularMovies(json.results));
   }
   useEffect(()=>{
   adi();
   }, []);

  }
  
  export default usePopularMovies;
  
