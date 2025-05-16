import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddTuition from "../components/AddTuition";
import UpdateTuition from "../components/UpdateTuition";
import ShowDetails from "../pages/ShowDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        loader: () => fetch(`http://localhost:5000/tuitions`),
        Component: Home,
      },
      {
        path: "/showDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tuitions/${params.id}`),
        Component: ShowDetails,
      },
      {
        path: "/addTuition",
        Component: AddTuition,
      },
      {
        path: "/updateTuition/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tuitions/${params.id}`),
        Component: UpdateTuition,
      },
      {
        path: "/users",
        loader  : () => fetch('http://localhost:5000/users'),
        Component: Users,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
