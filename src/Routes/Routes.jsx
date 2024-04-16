import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/error-page";
import EstateDetails from "../Components/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: '/estate/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch("/luxury.json"),
      },
    ],
  },
]);
export default router;
