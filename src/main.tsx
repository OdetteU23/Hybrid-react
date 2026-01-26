import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import ErrorPage from "./error-page";
//import { RouterProvider, createBrowserRouter } from 'react-router';
/*
const router = createBrowserRouter([
  { path: "/",
    element: (''),
    errorElement: <ErrorPage /> },
])
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/*<RouterProvider router={router} />*/}
  </StrictMode>,
)
