import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

export const withRouter = (component: () => React.ReactNode) => () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback="Loading...">{component()}</Suspense>,
    },
  ]);
  return <RouterProvider router={router} />;
};
