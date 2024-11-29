import {
  createBrowserRouter,
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
      element: <TemplateRenderer />,
    },
    {
      path: "/template/:templateId/project/:projectId", // 프로젝트 상세 경로
      element: <ProjectRenderer />,
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

const ProjectRenderer = () => {
  const { templateId, projectId } = useParams();

  // 템플릿 ID에 따라 프로젝트 컴포넌트 렌더링
  if (templateId === "1") {
    return <SimpleProject projectId={projectId} />;
  } else if (templateId === "2") {
    return <CreativeProject projectId={projectId} />;
  } else {
    return <div>Project not found</div>;
  }
};

export default Router;
