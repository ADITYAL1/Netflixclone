import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Link, useNavigate,useMatch} from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { ToggleshowSearch, ToggleshowaiSearch } from '../utils/searchSlice';
import { Supported_lang } from '../utils/constants';
import lang from '../utils/languageConstants';
import { ChangeLanguage } from '../utils/configSlice';


const Header = () => {
  const showSearch=useSelector((store)=>store.search.showSearch);
  const showaiSearch=useSelector((store)=>store.search.showaiSearch);
  

  const match1 =useMatch('/');
  const match2 =useMatch('/search');
  
  
  

 
  const img=require('./Watch Box.png');
  const dispatch =useDispatch();
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();

const handleLang=(e)=>{
      
      dispatch(ChangeLanguage(e.target.value));
}

  const handleSignOUt=()=>{
    signOut(auth).then(() => {
     
     
    }).catch((error) => {
      // An error happened.
    });
    
  }
  useEffect(()=>{
        

    onAuthStateChanged(auth, (user) => {
      if (user) {
    
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName
        }));
        if(match1==null) return;
        if(match1.pathname=='/')
        navigate("/browse");
      } 
      else
       {
      dispatch(removeUser());
      navigate("/");
      }
    });
    
           },[]);

           if(match2==null){
            dispatch( ToggleshowSearch(false));
          }

  const handleAiSearch=()=>{
    // toggle ai search button on browse.

    dispatch(
      ToggleshowSearch(true)
    );
  }
  const handleShowAiSearch=()=>{
    // toggle ai search button on browse.

    dispatch(
      ToggleshowaiSearch()
    );
  }
    
  return ( 
    <div className=' absolute   px-8 py-4 w-full  bg-gradient-to-b from-black z-10 flex justify-between  '>
      <div className='flex items-center flex-col md:flex-row'>
      <img
      className=' mx-auto md:mx-0 w-38 h-16 pl-10 md:pl-2'
      // src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      
    src={img}
       alt="logo" >
       </img>
        {
          user&& <ul className="flex p-4  ml-0 ">
          
          <li className="  px-2  font-bold text-white"><Link to="/"> 🏠Home </Link></li>
          <li className=" px-2  font-bold text-white"> <Link to='/tv'> 📺︎Tv shows</Link></li>
          <li className='px-2'><Link to="/search" >  <button  onClick={handleAiSearch} className=' text-white font-bold '>🔍 Search</button></Link></li>
        
          
        </ul>
        }
        </div>

       {user&&
      
        
       
       <div className=' flex m-1 p-1 flex-col md:flex-row'>
   {showSearch &&(
       <> <select className=' mt-1 mr-2 bg-gray-500 text-white  font-bold ' onChange={handleLang}>
          {Supported_lang.map((suplang)=><option value={suplang.identifier}>{suplang.name}</option>)}
        </select>
        <button onClick={handleShowAiSearch} className='p-2 m-2  bg-purple-500 text-white font-bold rounded-lg'>{showaiSearch?'Search Page':'Ai search'}</button>
</>
      )
}
      
       <img className='  mr-0 ml-2 w-12 h-12 'src='https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='profile-logo'></img>
     
       <button onClick={handleSignOUt} className=' mt-1 w-20 h-10 text-white font-bold cursor-pointer'>Sign Out</button>
       </div>
       
      
      
      
       }
       </div>
  )
}

export default Header
