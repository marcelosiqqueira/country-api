import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/Home'
import ErrorPage from './routes/ErrorPage';
import CountryInfo from "./components/CountryInfo"

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([  
  {
    // path: "/",
    // element: <Home />,
    errorElement  : <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countryinfo",
        element: <CountryInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)