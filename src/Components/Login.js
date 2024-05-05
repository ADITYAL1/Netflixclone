 import React, {  useRef, useState } from 'react'
import Header from './Header'
import {  ValidatesignIn, Validatesignup } from '../utils/Validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


 
 const Login = () => {
  
  const navigate=useNavigate();
   const [errmsg, seterrmsg]=useState(null);
   const [SignIn,setSignIn]=useState(true);
   const name=useRef(null);
   const email=useRef(null);
   const password=useRef(null);
    const isSignIn=()=>{
     setSignIn(!SignIn);
    }
    

    const HandleSubmit=()=>{
  
    
     const res =SignIn ? ValidatesignIn(email.current.value,password.current.value):Validatesignup(email.current.value,password.current.value,name.current.value);
      
      
      
      seterrmsg(res);
            if (res) return;
            //sign in && sign up
            if(!SignIn){
             
                
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                     // Signed up 
                 const user = userCredential.user;
                     
                        updateProfile(user, {
                          displayName:  name.current.value 
                        }).then(() => {
                          navigate("/browse");
                        }).catch((error) => {
                         
                        });
                        
                       
                       })
                 .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                     seterrmsg(errorCode+" "+errorMessage);
  });
            }
            else{
              //sign IN logic
              

            
                  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                   .then((userCredential) => {
                // Signed in 
                  const user = userCredential.user;
          
              navigate("/browse");
               
  })
                .catch((error) => {
               const errorCode = error.code;
                 const errorMessage = error.message;
               seterrmsg(errorCode+" "+errorMessage);
                     });

            }


    }
 
   return (
     <div>
        <Header/>
        <div className=' absolute w-full '>
        {/* https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg */}
        <img className='  h-screen w-full'   src= 'https://www.wallpaperflare.com/static/186/189/287/san-francisco-california-cityscape-city-wallpaper.jpg'
        alt='img'/>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className=' w-[90%]   md:w-3/12 absolute p-12 bg-black normal-case   my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 font-semibold'> 
        <h1 className=" my-0  mr-24 pr-8 text-3xl font-bold text-left">{SignIn ?'Sign In':'Sign Up'}</h1>
        { !SignIn && <input ref={name} type='text' placeholder='Full Name' className='p-2 m-2 w-full  text-base rounded-md  bg-gray-700'/
         >}
        <input
         ref={email}
         type='text' placeholder='Email-Address' className='p-2 m-2  w-full  text-base rounded-md  bg-gray-700'
         />
        <input
        ref={password}
        type='text' placeholder='Password' className='p-2 m-2 w-full text-base rounded-md bg-gray-700 font-semibold'
        />
        <p className=' text-red-500 text-sm mb-1  text-center'>{errmsg}</p>
        <button  onClick={HandleSubmit} className='py-2 ml-2 bg-red-700 text-white w-full text-base rounded-md '>Sign In</button>
        <p className='py-2 ml-2 text-center text-sm font-semibold cursor-pointer hover:underline' onClick={isSignIn}> {SignIn ?'New to WatchBox? Sign Up Now':'Already Registered? Sign In Now' }</p>
       </form>
     </div>
   )
 }
 
 export default Login
 