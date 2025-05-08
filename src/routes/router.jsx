import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Errorpages from "../pages/Errorpages";
import Home from "../pages/Home";
import Spinner from "../components/Spinner";
import ViewDetails from "../pages/ViewDetails";
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
          }
        ],
      },
    ]);
export default router;
