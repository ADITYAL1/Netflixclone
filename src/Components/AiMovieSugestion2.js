import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const AiMovieSugestion2 = () => {
  
   const movie= useSelector((store)=>store.search);
  const {moviesName,showaimovies}=movie;
 
  return  showaimovies &&(
    <div className=' p-4 m-4  mt-80 text-white'>
      <div className=' -mt-72 relative z-20'>
        {moviesName.map((movieName,index)=><MovieList title={movieName} movies={showaimovies[index]}></MovieList>
  )}
      
      
      </div>
    </div>
  )
}

export default AiMovieSugestion2
