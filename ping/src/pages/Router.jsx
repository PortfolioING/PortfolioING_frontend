import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import User from "./User/User";
import Price from "./Price/Price";
import Survey from "./Survey/Survey";
import Templates from "./PortfolioTemplates/Templates";
import Simple from "../components/SimpleTemplate/Simple";
import SimpleProject from "../components/SimpleTemplate/SimpleProject";
import AboutPing from "./AboutPing/AboutPing";
import Creative from "../components/CreativeTemplate/Creative";
import CreativeProject from "../components/CreativeTemplate/CreativeProject";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/user",
      element: <Navigate to="/user/1" />,
    },
    {
      path: "/porfolio",
      element: <Main />,
    },
    {
      path: "/price",
      element: <Price />,
    },
    {
      path: "/survey",
      element: <Survey />,
    },
    {
      path: "/about-ping",
      element: <AboutPing />,
    },
    {
      path: "/templates",
      element: <Templates name="ping" />,
    },
    {
      path: "/template1",
      element: <Simple />,
    },
    {
      path: "/template1-project",
      element: <SimpleProject />,
    },
    {
      path: "/template2",
      element: <Creative />,
    },
    {
      path: "/template2-project",
      element: <CreativeProject />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
