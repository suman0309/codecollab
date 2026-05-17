import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contacts/contact.jsx'
import User from './components/user/user.jsx'
import Github ,{gitHubIfoLoader} from './components/github/github.jsx'
const router=createBrowserRouter([
{

path:'/',
element:<Layout/>,
children:[
  {
    path:"",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"user/:userid",
    element:<User/>
  },{

    
    path:"github",
    element:<Github/>,
    loader:gitHubIfoLoader
  }
]

}

])



createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router} />
 
)
