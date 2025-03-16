import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Nothing from './components/Nothing';
import Navbar from './components/Navbar';
import Param from './components/Param';
import Courses from './components/Courses';
import Report from './components/Report';
import NotFound from './components/NotFound';



const router = createBrowserRouter(

  [
    {path:"/",
     element:  <div>
      <Navbar/>
      <Home/>
     </div>
    },

    {
      path:"/about",
      element:  <div>
      <Navbar/>
      <About/>
     </div>
    },
    {
      path:"/nothing",
      element:  <div>
      <Navbar/>
      <Nothing/>
     </div>,
     children:[
      {
        path:'courses',
        element:<Courses/>
      },

      {
        path:'reports',
        element:<Report/>
      }

      
     ]
    },

    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <Param/>
      </div>
    },

  
    {
      path:'*',
      element:<NotFound/>
    }    
  ]

);



function App() {


  return (
   <div>
       <RouterProvider router={router}/>
       
   </div>
  )
}

export default App
