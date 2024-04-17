import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/error-page";
import EstateDetails from "../Components/EstateDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import ConsultancyHub from "../Pages/ConsultancyHub";
import ConsultantDetails from "../Components/ConsultantDetails";

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
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: '/consultancyhub',
        element: <PrivateRoute><ConsultancyHub></ConsultancyHub></PrivateRoute>,
        loader: () => fetch("/consultant.json"),
      },
      {
        path: '/consultantdetails/:id',
        element: <PrivateRoute><ConsultantDetails></ConsultantDetails></PrivateRoute>,
        loader: () => fetch("/consultant.json"),
      },
    ],
  },
]);
export default router;
