import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Link } from "react-router-dom";
import './index.css'


import Connexion from "./pages/Connexion";


/*import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "CONNEXION",
    element: <Connexion/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
