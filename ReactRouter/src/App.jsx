import './App.css'
import Home from './components/Home'
import About from './components/About'
import Something from './components/Something'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
const router = createBrowserRouter(
  [
    {path:"/" , 
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {path:"/about" , 
      element:<div>
      <Navbar/>
      <About/>
    </div>
    },

    {path:"/something" , 
      element: <div>
      <Navbar/>
      <Something/>
    </div>
    }
    
  ]
  
)


function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
        
    </div>
  )
}

export default App
