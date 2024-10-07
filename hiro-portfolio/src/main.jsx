import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import data from './data.json';


const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Projects/:id",
        element: <ProjectDetails dados={data}/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas}/>
  </StrictMode>,
)
