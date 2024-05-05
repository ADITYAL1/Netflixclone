import React, { useRef } from 'react'

import { API_option } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {   addsearchaimovies } from '../utils/searchSlice';
import lang from '../utils/languageConstants';
import OpenAI from 'openai';

const AiSearchapi = () => {
  const showlang= useSelector((store)=>store.config.showlang)
  
    const searchText =useRef();
    const apiKey=useRef();
    const dispatch=useDispatch();
    const fetchmovie=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
      API_option);
     const json=await data.json();
     return json.results;
    }
  
    

    const handleSearch= async()=>{
       const movie=searchText.current.value;
       const api=apiKey.current.value;
       
       const openai = new OpenAI({

        apiKey: api,
        dangerouslyAllowBrowser: true
      });
       const query="Act as a movie recommendation system and suggest some movie for the qurry : "+searchText.current.value+". only give me five  movie with comma seperated like example given ahead. example results: Dhoom, Don, koi mil gaya, Heropanti, sholay "
       const aiResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      const res=aiResult.choices?.[0]?.message?.content.split(',');
     const promise=res.map((movie)=>fetchmovie(movie)) ;
     const tmdbres=await promise.all(promise);
      dispatch(addsearchaimovies( {moviesName:res , movies:tmdbres} ));
    }
  return (
    <div className="flex items-center  flex-col  justify-center pt-[7%]">
    <div className="mr-4 ml-[5%] mb-4 pt-[60%] md:pt-[2%] ">
      <label htmlFor="apiKey" className="block text-white font-bold mb-1">
        API Key:
      </label>
      <input
        type="text"
        id="apiKey"
        placeholder='Enter openAi api key'
        className="border rounded p-2 w-64"
        ref={apiKey}
       
      />
    </div>
    <form className='  w-[70%] md:w-1/2 grid grid-cols-12 mt-2  rounded-3xl bg-blue-300 mr-[10%]' onSubmit={(e)=>e.preventDefault()}>
        <input className='m-2 p-4 col-span-9 rounded-2xl'ref={searchText} type='text' placeholder={lang[showlang].searchPlaceholder}></input>
        <button className='  bg-blue-600 m-2 col-span-3 rounded-xl text-white py-4 px-2'  onClick={handleSearch}>{lang[showlang].search}</button>
      </form>
   
  </div>
  

  )
}

export default AiSearchapi
