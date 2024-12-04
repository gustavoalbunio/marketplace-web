import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./app/dashboard";
import { SignIn } from "./auth/sign-in";
import { AuthLayout } from "./_layouts/auth";
import { AppLayout } from "./_layouts/app";
import { SignUp } from "./auth/sign-up";
import { Products } from "./app/products";
import { ProductsEdit } from "./app/product-edit";
import { ProductsCreate } from "./app/product-create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductsEdit />,
      },
      {
        path: "/product/new",
        element: <ProductsCreate />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
