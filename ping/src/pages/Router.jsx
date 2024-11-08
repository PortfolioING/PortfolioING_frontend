import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import User from "./User/User";
import Price from "./Price/Price";
import Survey from "./Survey/Survey";
import Templates from "./PortfolioTemplates/Templates";
import Simple from "../components/SimpleTemplate/Simple";
import SimpleProject from "../components/SimpleTemplate/SimpleProject";
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
      path: "/templates",
      element: <Templates name="ping" />,
    },
    {
      path: "/templates1",
      element: <Simple />,
    },
    {
      path: "/templates1-project",
      element: <SimpleProject />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
