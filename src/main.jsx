import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Error from "./routes/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        path: "contacts/:contactid",
        element:<Contact /> ,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
