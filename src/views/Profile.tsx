//import { useState } from 'react';
import {type NavigateFunction, useNavigate} from 'react-router';
//import { useLocation } from 'react-router-dom';

/*import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Profile page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

const Profile = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <h1> Welcome to the Profile View!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      </div>
  );
}

export default Profile;

