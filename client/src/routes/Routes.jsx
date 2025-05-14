import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
