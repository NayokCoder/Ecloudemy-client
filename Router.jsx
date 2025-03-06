import { createBrowserRouter } from "react-router-dom";
import Main from "./MainLayout/Main";
import Home from "./Home/Home";
import Register from "./src/Componet/Register";
import AdminLogin from "./src/Componet/Admin/AdminLogin";
import Community from "./src/Pages/Community";
import Testimonial from "./src/Pages/Testimonial";
import AboutUS from "./src/Pages/AboutUS";
import Contact from "./src/Pages/Contact";
import Webinar from "./src/Pages/Webinar/Webinar";
import AdminRoute from "./Hook/AdminRoute";
import DashBoard from "./src/Componet/Admin/DashBoard";
import UserInfo from "./src/Componet/Admin/LinkPages/UserInfo";
import DashHome from "./src/Componet/Admin/LinkPages/DashHome";
import Page404 from "./src/Pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/webinar",
        element: <Webinar />,
      },

      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/testimonials",
        element: <Testimonial />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashBoard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <DashHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/user-info-list",
        element: (
          <AdminRoute>
            <UserInfo />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
