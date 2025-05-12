import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Errorpages from "../pages/Errorpages";
import Home from "../pages/Home";
import Spinner from "../components/Spinner";
import ViewDetails from "../pages/ViewDetails";
import AboutUs from "../pages/AboutUs";

import OurSuccess from "../pages/OurSuccess";
import ContactUs from "../pages/ContactUs";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Errorpages />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: () => fetch("/company-data.json"),
            hydrateFallbackElement: <Spinner />,
          },
          {
            path: "company/:companyId",
            element: <ViewDetails />,
            loader: () => fetch("/company-data.json"),
            hydrateFallbackElement: <Spinner />,
          },
          {
            path: "job/:jobId",
            element: <ViewDetails />,
            loader: () => fetch("/company-data.json"),
            hydrateFallbackElement: <Spinner />,
          },
          {
            path: "/about",
            element:<AboutUs />,
           
           
            hydrateFallbackElement: <Spinner />,
          },
          {
            path: "/OurSuccess",
            element:<OurSuccess />,
           
           
            hydrateFallbackElement: <Spinner />,
          },
          {
            path: "/ContactUs",
            element:<ContactUs />,
           
           
            hydrateFallbackElement: <Spinner />,
          }

        ],
      },
      {
path: "/auth",
element: <AuthLayout />,
children: [
  {
    path: "/auth/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/auth/register",
    element: <Register></Register>,
  },

],


      }
    ]);
export default router;
