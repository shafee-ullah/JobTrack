import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Errorpages from "../pages/Errorpages";
import Home from "../pages/Home";
import Spinner from "../components/Spinner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Errorpages />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../company-data.json"),
        hydrateFallbackElement: <Spinner />,
      },
    ],
  },
]);
export default router;
