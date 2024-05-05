import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const AiMovieSuggestion = () => {
  
   const movies= useSelector((store)=>store.search);
  
 
  return  movies.showmovies &&(
    <div className=' p-4 m-4  mt-80 text-white'>
      <div className=' -mt-72 relative z-20'>
      <MovieList title={"Results"} movies={movies.showmovies}></MovieList>
  
      
      </div>
    </div>
  )
}

export default AiMovieSuggestion
