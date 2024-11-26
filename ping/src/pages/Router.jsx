import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
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
      path: "/template/:templateId", // 템플릿 상세 경로
      element: <TemplateRenderer />, // 조건에 따라 다른 컴포넌트를 렌더링
    },

    {
      path: "/template/:templateId/project/:projectId", // 프로젝트 상세 경로
      element: <SimpleProject />, // 프로젝트 상세 페이지
    },
  ]);

  return <RouterProvider router={router} />;
};

const TemplateRenderer = () => {
  const { templateId } = useParams();

  // 템플릿 ID에 따라 다른 컴포넌트 렌더링
  if (templateId === "1") {
    return <Simple />;
  } else if (templateId === "2") {
    return <Creative />;
  } else {
    return <div>Template not found</div>;
  }
};

export default Router;
