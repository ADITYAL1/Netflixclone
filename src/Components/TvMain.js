import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
import TvVideoBackground from './TvVideoBackground';

function TvMain() {
    const Tv=useSelector((store)=>store.tv?.TopRated);
   if(!Tv) return;
   

  
    const mainMovie=Tv[2]; 
  
    const {title,overview,name,id}=mainMovie;
   
   
  return (
    <div className='pt-[35%] bg-black md:pt-0  overflow-y-scroll'>
      <VideoTitle title={title} name={name} overview={overview} id={id} />
      <TvVideoBackground id={id} />

    </div>
  )
}

export default TvMain
