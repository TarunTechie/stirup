import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
    errorElement:<div>404 NOT FOUND</div>,
  },
  {
    path:"/login",
    element:<LoginScreen />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);