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
import RegisterScreen from "./pages/RegisterScreen";
import CameraScreen from "./pages/CameraScreen";
import IngredientsScreen from "./pages/IngredientsScreen";
import NutritionScreen from "./pages/NutritionScreen";
import RandomScreen from "./pages/RandomScreen";
import RecipeScreen from "./pages/RecipeScreen";
import Bigcard from "./pages/bigCard";
import Cuisines from "./pages/CuisineScreen"
import RecipesScreen from "./pages/RecipesScreen";
import CollectionScreen from "./pages/CollectionScreen";
import Profile from "./pages/profileScreen";

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
  {
    path:"/register",
    element:<RegisterScreen/>
  },
  {
    path:"/camera",
    element:<CameraScreen/>
  },
  {
    path:"/ingredients",
    element:<IngredientsScreen/>
  },
  {
    path:"/nutrition",
    element:<NutritionScreen/>
  },
  {
    path:"/random",
    element:<RandomScreen/>
  },
  {
    path:"/recipe",
    element:<RecipeScreen/>
  },
  {
    path:"/show/:id",
    element:<Bigcard/>
  },
  {
    path:"/recipes",
    element:<RecipesScreen/>
  },
  {
    path:"/collections",
    element:<CollectionScreen/>
  },
  {
    path:"/cuisines/:name",
    element:<Cuisines/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);