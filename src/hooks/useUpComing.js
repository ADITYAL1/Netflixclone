import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {   addUpComing } from "../utils/moviesSlice";
import { API_option } from "../utils/constants";
  
  const useUpComing = () => {
    const Upcoming=useSelector((store)=>store.movies.Upcoming);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
       API_option);
      const json=await data.json();
      
 
      dispatch(addUpComing(json.results));
   }
   useEffect(()=>{
   if(!Upcoming)adi();
   }, []);

  }
  
  export default useUpComing;