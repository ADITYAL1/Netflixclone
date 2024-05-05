import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
import { API_option } from "../utils/constants";
import {  addHinditv, addPopular} from "../utils/tvSlice";
  
  const useTvHindi = () => {
    const Hindi=useSelector((store)=>store.tv.Hindi);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=1&sort_by=popularity.desc&with_original_language=hi',
       API_option);
      const json=await data.json();
    
 
      dispatch(addHinditv(json.results));
   }
   useEffect(()=>{
   if(!Hindi)adi();
   }, []);

  }
  
  export default useTvHindi;