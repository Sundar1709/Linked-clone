import {
    createBrowserRouter,
  } from "react-router-dom";
  import Login from "../pages/login";
  import Register from "../pages/Register";
  import Home from "../pages/home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);