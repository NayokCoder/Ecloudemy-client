import { createBrowserRouter } from "react-router-dom";
import Main from "./MainLayout/Main";
import Home from "./Home/Home";
import Register from "./src/Componet/Register";
import AdminLogin from "./src/Componet/Admin/AdminLogin";
import AdminDash from "./src/Componet/Admin/AdminDash";

import OurCourses from "./src/Pages/OurCourses";
import Community from "./src/Pages/Community";
import Testimonial from "./src/Pages/Testimonial";
import AboutUS from "./src/Pages/AboutUS";
import Contact from "./src/Pages/Contact";
import Webinar from "./src/Pages/Webinar/Webinar";

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
        path: "/webinar",
        element: <Webinar />,
      },
      {
        path: "/our-courses",
        element: <OurCourses />,
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
    path: "/admindash",
    element: <AdminDash />,
  },
]);

export default router;
