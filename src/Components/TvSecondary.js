import {  useSelector } from 'react-redux';
import MovieList from './MovieList';

function TvSecondary() {
  const movies= useSelector((store)=>store.tv);
  
 
  return  movies.NowPlayingTv &&(
    <div className=' bg-black '>
      <div className='-mt-9 md:-mt-72 relative z-20'>
      <MovieList title={"Top Rated"} movies={movies.TopRated}></MovieList>
      <MovieList title={"HindiTvShows"} movies={movies.Hindi}></MovieList>
      <MovieList title={"Upcoming"} movies={movies.NowPlayingTv}></MovieList>
      <MovieList title={"Popular"} movies={movies.Popular}></MovieList>
    
      
      </div>
    </div>
    );
  
};

export default TvSecondary
