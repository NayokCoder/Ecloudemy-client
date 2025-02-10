import { createBrowserRouter } from "react-router-dom";
import Main from "./MainLayout/Main";
import Home from "./Home/Home";
import Register from "./src/Componet/Register";
import AdminLogin from "./src/Componet/Admin/AdminLogin";
import AdminDash from "./src/Componet/Admin/AdminDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin-panel-2025",
    element: <AdminLogin />,
  },
  {
    path: "/admindash",
    element: <AdminDash />,
  },
]);

export default router;
