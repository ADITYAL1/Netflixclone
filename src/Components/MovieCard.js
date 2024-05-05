import React, { useState } from 'react'
import { cdn_url } from '../utils/constants'
import { Link, useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux';

const MovieCard = ({posterPath,id}) => {
  const type=useSelector((store)=>store.movies.type);
  const Type=type?'movie':'tv'
  if(!posterPath) return null;


 
  return (
   <Link to={'/watch/'+Type+'/'+id}> <div className=' w-40 p-1'>
      <img  alt='movie card' src={cdn_url+posterPath}></img>
    </div></Link>
  )
}

export default MovieCard
