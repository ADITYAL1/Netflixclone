import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
import { API_option } from "../utils/constants";
import {  addPopular} from "../utils/tvSlice";
  
  const useTvPopular = () => {
    const Popular=useSelector((store)=>store.tv.Popular);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
       API_option);
      const json=await data.json();
    
 
      dispatch(addPopular(json.results));
   }
   useEffect(()=>{
   if(!Popular)adi();
   }, []);

  }
  
  export default useTvPopular;