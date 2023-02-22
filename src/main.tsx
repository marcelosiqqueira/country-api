import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/Home'
import ErrorPage from './routes/ErrorPage';
import CountryInfo from "./routes/CountryInfo"

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement  : <ErrorPage></ErrorPage>
  },
  {
    path: "/countryInfo",
    element: <CountryInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)