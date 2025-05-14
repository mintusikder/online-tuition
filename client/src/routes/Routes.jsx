import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddTuition from "../components/AddTuition";
import UpdateTuition from "../components/UpdateTuition";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        loader : () =>fetch(`http://localhost:5000/tuitions`),
        Component: Home,
      },
      {
        path: "/addTuition",
        Component: AddTuition,
      },
      {
        path: "/updateTuition",
        Component: UpdateTuition,
      },
    ],
  },
]);
