import React from 'react'
import MovieList from './MovieList'
import {  useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies= useSelector((store)=>store.movies);
  
 
  return  movies.NowPlayingMovies &&(
    <div className='bg-[#141414] w-full '>
      <div className=' -mt-9 md:-mt-72 relative z-20'>
      <MovieList title={"NowPlaying"} movies={movies.NowPlayingMovies}></MovieList>
      <MovieList title={"NowPlayingBollywoodMovies"} movies={movies.Bollywood}></MovieList>
      <MovieList title={"Popular"} movies={movies.PopularMovies}></MovieList>
      <MovieList title={"Upcoming"} movies={movies.UpComing}></MovieList>
      
      </div>
    </div>
    );
  
};

export default SecondaryContainer
