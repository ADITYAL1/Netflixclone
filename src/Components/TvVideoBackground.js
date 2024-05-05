import React, { useEffect, useState } from 'react'
import {  API_option } from '../utils/constants'

function TvVideoBackground({id}) {

  const [trailerId, settrailerId]=useState(null);
  
    const getMovievideos=async ()=>{

      const data=await fetch('https://api.themoviedb.org/3/tv/'+id+'/videos?language=en-US', API_option);
      const json=await data.json();
       
       const filtertrailer = json.results.filter((video)=>video.type =='Trailer');
      const trailer=filtertrailer.length?filtertrailer[0]:json.results[0];
      settrailerId(trailer.key);
       
    };
    useEffect(()=>{
         getMovievideos();
    },[]);
  return (
    <div className='w-screen'>
    <iframe  className=' w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1&allow=autoplay;"}
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      </iframe>
      
    </div>
  )
}

export default TvVideoBackground;
