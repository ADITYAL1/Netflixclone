import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowBollyMovies, addNowMovies } from "../utils/moviesSlice";
import { API_option } from "../utils/constants";

const useNowBollyMovies= () => {
  const Bollywood=useSelector((store)=>store.movies.Bollywood);
const dispatch=useDispatch();

  const adi= async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&sort_by=popularity.desc&with_original_language=hi',
     API_option);
    const json=await data.json();
    

    dispatch(addNowBollyMovies(json.results));
 }
 useEffect(()=>{
 if(!Bollywood)adi();
 }, []);

}

export default useNowBollyMovies;

