import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    
   
  return (
    <div>
    <h1 className=' font-bold text-3xl'>video Not fond </h1>
     <Link to="/browse"><p className=' font-bold text-3xl m-4  w-32 p-2 bg-black text-white'>Home</p></Link>
    </div>
  )
}

export default Error
