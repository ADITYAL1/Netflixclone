
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import TvShows from './TvShows';
import Watch from './Watch';
import Error from './Error';
import AiSearch from './AiSearch';


const Body = () => {
 
      const Approuter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
          },
              {
                path:'/browse',
                element:<Browse/>,
                errorElement:<Error/>,
            },
            {
              path:'/tv',
              element:<TvShows/>,
            
            },
          
              {
                path:'/watch/movie/:id',
                element:<Watch/>,
                errorElement:<Error/>
                
              },
              {
                path:'/watch/tv/:id',
                element:<Watch/>,
                errorElement:<Error/>
                
              },

            
              {
                path:'/search',
                element:<AiSearch/>,
                
              },
              {
                path:'/error',
                element:<Error/>,
                
              },
            
        
      
        
        
      ]);
      



  return (
    <div>
      <RouterProvider router={Approuter}></RouterProvider>
    </div>
  )
}

export default Body
