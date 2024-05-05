
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { API_option } from '../utils/constants';
import { addNowMovies, addtype } from '../utils/moviesSlice';
import { useEffect } from 'react';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComing from '../hooks/useUpComing';
import useTvShows from '../hooks/useTvShows';
import Footer from './Footer';
import AiSearch from './AiSearch';
import useNowBollyMovies from '../hooks/useNowBollyMovies';

const Browse = () => {
  const showSearch=useSelector((store)=>store.search.showSearch);
 const dispatch=useDispatch();
 dispatch(addtype(true));
  useNowPlaying();
  usePopularMovies();
  useUpComing();
  useNowBollyMovies();
  
 

   

  return (
    <div className=''  >
        <Header />
         <MainContainer/>
        <SecondaryContainer/> 
        <Footer/>    
          
               
    </div>
  )
}

export default Browse;
