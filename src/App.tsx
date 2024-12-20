import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";

const routes: RouteObject[] = [
  {
    element: (
      <>
        <CustomerLayout />
        <Analytics />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: (
      <>
        <AdminLayout />
        <Analytics />
      </>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      // {
      //   path: "/admin2",
      //   element: <AdminLandingPage />,
      // },
    ],
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;