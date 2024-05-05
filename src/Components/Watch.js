import React, { useEffect, useState } from 'react'

import Header from './Header'
import { API_option } from '../utils/constants';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import Error from './Error';
const Watch = () => {
  
  const [trailerId, settrailerId]=useState(null);
  const navigate = useNavigate();
  const location =useLocation();
  const {id}=useParams();
  
  const choice=location.pathname=="/watch/tv/"+id?'tv':'movie';




  const getMovievideos=async ()=>{
      
    const data=await fetch('https://api.themoviedb.org/3/'+choice+'/'+id+'/videos?language=en-US', API_option);
    const json=await data.json();
     if(json.results==null)return;
   
      const filtertrailer = json.results?.filter((video)=>video?.type =='Trailer');
     
    const trailer=filtertrailer.length?filtertrailer[0]:json.results[0];
    if(trailer==null){
      navigate('/error');
      return;
    }
    settrailerId(trailer.key);
     
  };
  useEffect(()=>{
       getMovievideos();
  },[]);
  return (
    <div>
     <Header/>
   
    <div className='w-screen'>
    <iframe  className=' w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1&allow=autoplay&w=500&h=100;"}
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      </iframe>
      
    </div>
    </div>
   
  )
}

export default Watch
