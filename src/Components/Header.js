import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const handleSignOUt=()=>{
    signOut(auth).then(() => {
     navigate("/");
     
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return ( 
    <div className='absolute   px-8 py-4 w-full  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
      className=' w-32 '
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
       alt="logo" >
       </img>
       {user&&
       <div className=' grid'>
       <div className=' flex m-1 p-1'>
       <img className='  mr-2 w-12 h-12 'src='https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='profile-logo'></img>
     
       <button onClick={handleSignOUt} className=' mt-1 w-20 h-10 text-white font-bold cursor-pointer'>Sign Out</button>
       </div>
       <h1 className='font-bold pl-4'>({user.displayName})</h1>
       </div>
       }
       </div>
  )
}

export default Header
