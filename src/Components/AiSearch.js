import React from 'react'
import AiSearchBar from './AiSearchBar'
import AiMovieSuggestion from './AiMovieSuggestion'
import Header from './Header'
import { useSelector } from 'react-redux'
import AiSearchapi from './AiSearchapi'
import AiMovieSugestion2 from './AiMovieSugestion2'

const AiSearch = () => {
  const showSearch=useSelector((store)=>store.search.showaiSearch);
  
  return (
    <div className=''>
           <div className=' absolute w-full -z-10 '>
        {/* https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg */}
        <img className='   h-screen object-cover w-screen'   src={showSearch?'https://static.vecteezy.com/system/resources/previews/002/370/784/large_2x/technology-background-with-a-ai-concept-vector.jpg':'https://www.wallpaperflare.com/static/186/189/287/san-francisco-california-cityscape-city-wallpaper.jpg'} 
        alt='img'/>
        </div>
        <Header/>
        {showSearch ?  <><AiSearchapi/>
         <AiMovieSugestion2/>
         </>: <><AiSearchBar/>
         <AiMovieSuggestion/></>  
        
         }
        
    </div>
  )
}

export default AiSearch
