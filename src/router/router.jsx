import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../components/NotFound";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import GadgetDetail from "../components/GadgetDetail";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gadget/:gadgetId",
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/gadgetsCart",
        element: <Cart></Cart>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
