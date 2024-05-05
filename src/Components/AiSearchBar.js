import React, { useRef } from 'react'

import { API_option } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addsearchmovies } from '../utils/searchSlice';
import lang from '../utils/languageConstants';

const AiSearchBar = () => {
  const showlang= useSelector((store)=>store.config.showlang)
  
    const searchText =useRef();
    const dispatch=useDispatch();
    const fetchmovie=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
      API_option);
     const json=await data.json();
     return json.results;
    }
    

    const handleSearch= async()=>{
       const movie=searchText.current.value;
      //  const query="Act as a movie recommendation system and suggest some movie for the qurry : "+searchText.current.value+". only give me five  movie with comma seperated like example given ahead. example results: Dhoom, Don, koi mil gaya, Heropanti, sholay "
      //  const aiResult = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: query }],
      //   model: 'gpt-3.5-turbo',
      // });
     const tmdbres=await fetchmovie(movie);
   
      dispatch(addsearchmovies(  tmdbres));
    }
  return (
    <div className='flex justify-center  pt-[60%] md:pt-[10%]  '>
          
      <form className='w-[70%] md:w-1/2 grid grid-cols-12  rounded-3xl bg-black' onSubmit={(e)=>e.preventDefault()}>
        <input className='m-2 p-4 col-span-9 rounded-2xl'ref={searchText} type='text' placeholder={lang[showlang].searchPlaceholder}></input>
        <button className=' bg-red-500 m-2 col-span-3 rounded-xl text-white py-4 px-2'  onClick={handleSearch}>{lang[showlang].search}</button>
      </form>
    </div>
  )
}

export default AiSearchBar
