import React from 'react'
import Header from './Header'


import useTvShows from '../hooks/useTvShows'
import TvMain from './TvMain'
import TvSecondary from './TvSecondary'
import useTopRated from '../hooks/useTopRated'
import useTvPopular from '../hooks/useTvPopular'
import Footer from './Footer'
import useTvHindi from '../hooks/useTvHindi'
import { useDispatch } from 'react-redux'
import { addtype } from '../utils/moviesSlice'


const TvShows = () => {
   useTvShows();
   useTopRated();
   useTvPopular();
   useTvHindi();
   const dispatch=useDispatch();
   dispatch(addtype(false));
  return (
    <div>
        
      <Header/>
       <TvMain/>
      <TvSecondary/>
      <Footer/>
    </div>
  )
}

export default TvShows
