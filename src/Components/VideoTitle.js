import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function VideoTitle({title,overview,name,id}) {
  const navigate=useNavigate();
  const type=useSelector((store)=>store.movies.type);
  const Type=type?'movie':'tv'
   const handlePlay=()=>{
    navigate('/watch/'+Type+'/'+id)
   }
   
  return (
    <div className=' w-screen aspect-video pt-[20%] px-5 md:px-24 absolute text-white bg-gradient-to-r from-black opacity-90'>
      <h1 className=' text-lg md:text-2xl font-bold '>{title?title:name}</h1>
      <p className=' hidden md:inline-block pl-1 w-1/4 text-sm'>{overview}</p>
      <div >
        <button className=' bg-white   hover:opacity-80 px-2 p-1 md:px-8 md:py-3 rounded-lg m-2 text-black font-bold' onClick={handlePlay}> Play</button>
        
      </div>
    </div>
  )
}

export default VideoTitle
