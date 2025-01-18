import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";

import Price from "./Price/Price";
import Survey from "./Survey/Survey";
import AboutPing from "./AboutPing/AboutPing";
import WorkSpace from "./WorkSpace/WorkSpace";

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
      path: "/survey",
      element: <Survey />,
    },
    {
      path: "/about-ping",
      element: <AboutPing />,
    },
    {
      path: "/workspace",
      element: <WorkSpace />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
