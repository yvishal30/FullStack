import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import './index.css'
import ErrorPage from './errorPage'
import Contact from './routes/contacts'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'contacts/:contactId',
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
