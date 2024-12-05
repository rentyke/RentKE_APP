import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
import AdminDashboard from "./pages/AdminLandingPage";

const router = createBrowserRouter([
  {
    element: <CustomerLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
