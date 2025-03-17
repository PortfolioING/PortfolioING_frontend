import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";

import Price from "./Price/Price";

import AboutPing from "./AboutPing/AboutPing";
import WorkSpace from "./WorkSpace/WorkSpace";
import Default from "../템플릿/Default/Default";
import SideStyleBar from "../components/SideStyleBar/SideStyleBar";

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
      path: "/price",
      element: <Price />,
    },

    {
      path: "/about-ping",
      element: <AboutPing />,
    },
    {
      path: "/workspace",
      element: <WorkSpace />,
    },
    { path: "/default-template", element: <Default /> },
    { path: "/test", element: <SideStyleBar /> },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
