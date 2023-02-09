import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: component(),
    },
  ]);
  return <RouterProvider router={router} />;
};
