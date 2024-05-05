import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
import { API_option } from "../utils/constants";
import { addNowTv } from "../utils/tvSlice";
  
  const useTvShows = () => {
    const Upcoming=useSelector((store)=>store.tv.NowPlayingTv);
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
       API_option);
      const json=await data.json();
    
 
      dispatch(addNowTv(json.results));
   }
   useEffect(()=>{
   if(!Upcoming)adi();
   }, []);

  }
  
  export default useTvShows;
  
