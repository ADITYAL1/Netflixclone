import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
import { API_option } from "../utils/constants";
import {  addTopRated } from "../utils/tvSlice";
  
  const useTopRated = () => {
    const TopRated=useSelector((store)=>store.tv.TopRated);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
       API_option);
      const json=await data.json();
      dispatch(addTopRated(json.results));
   }
   useEffect(()=>{
   if(!TopRated)adi();
   }, []);

  }
  
  export default useTopRated;