 import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addNowMovies } from "../utils/moviesSlice";
import { API_option } from "../utils/constants";
  
  const useNowPlaying = () => {
    const NowPlaying=useSelector((store)=>store.movies.NowPlayingMovies);
  
  const dispatch=useDispatch();

    const adi= async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
       API_option);
      const json=await data.json();
    
 
      dispatch(addNowMovies(json.results));
   }
   useEffect(()=>{
   if(!NowPlaying)adi();
   }, []);

  }
  
  export default useNowPlaying;
  
