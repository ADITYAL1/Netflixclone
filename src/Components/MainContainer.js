import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';

function MainContainer() {
    const movies=useSelector((store)=>store.movies?.NowPlayingMovies);
   if(!movies) return;
   

  
    const mainMovie=movies[0]; 
   
    const {title,overview,id}=mainMovie;
  
   
   
  return (
    <div className=' pt-[35%] bg-black md:pt-0  overflow-y-scroll '>
      <VideoTitle title={title} overview={overview } id={id} />
      <VideoBackground id={id} />

    </div>
  )
}

export default MainContainer
