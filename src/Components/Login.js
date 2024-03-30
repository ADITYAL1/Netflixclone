 import React, { useState } from 'react'
import Header from './Header'

 
 const Login = () => {
   const [SignIn,setSignIn]=useState(true);
    const isSignIn=()=>{
      setSignIn(!SignIn);
    }
   return (
     <div>
        <Header/>
        <div className=' absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='img'/>
        </div>

        <form className=' w-3/12 absolute p-12 bg-black normal-case   my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 font-semibold'> 
        <h1 className=" my-0  mr-24 pr-8 text-3xl font-bold">{SignIn ?'Sign In':'Sign Up'}</h1>
        { !SignIn && <input type='text' placeholder='Full Name' className='p-2  w-full  text-base rounded-md  bg-gray-700'/>}
        <input type='text' placeholder='Email-Address' className='p-2  w-full  text-base rounded-md  bg-gray-700'/>
        <input type='text' placeholder='Password' className='p-2 my-0 w-full text-base rounded-md bg-gray-700 font-semibold'/>
        <button className='py-2  bg-red-700 text-white w-full text-base rounded-md '>Sign In</button>
        <p className='py-2 text-sm font-semibold cursor-pointer hover:underline' onClick={isSignIn}> {SignIn ?'New to Netflix? Sign Up Now':'Already Registered? Sign In Now' }</p>
       </form>
     </div>
   )
 }
 
 export default Login
 