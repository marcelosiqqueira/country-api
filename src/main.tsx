import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import CountryInfo from './routes/CountryInfo';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([  
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/CountryInfo/:name",
      element: <CountryInfo />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },   
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)