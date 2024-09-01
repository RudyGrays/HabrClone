import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { MessagesPage } from "pages/MessagesPage";
import { NotFoundPage } from "pages/NotFoundPage";
import Icon from "react-icons-kit";
import { RouteProps } from "react-router-dom";
import { home } from "react-icons-kit/icomoon/home";
import { ReactElement } from "react";
import { bubbles2 } from "react-icons-kit/icomoon/bubbles2";
import { info } from "react-icons-kit/icomoon/info";
import { warning } from "react-icons-kit/icomoon/warning";
export const enum Routes {
  MAIN = "страница главная",
  ABOUT = "страница о нас",
  MESSAGES = "страница сообщения",
  NOT_FOUND = "страница не найдено",
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
  [Routes.MESSAGES]: "/messages",
  [Routes.NOT_FOUND]: "*",
};
interface CustomRouteProps extends RouteProps {
  icon: ReactElement;
}

export const RouterConfig: Record<Routes, CustomRouteProps> = {
  [Routes.MAIN]: {
    element: <MainPage />,
    path: RoutePaths[Routes.MAIN],
    icon: <Icon icon={home} />,
  },
  [Routes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePaths[Routes.ABOUT],
    icon: <Icon icon={info} />,
  },
  [Routes.MESSAGES]: {
    element: <MessagesPage />,
    path: RoutePaths[Routes.MESSAGES],
    icon: <Icon icon={bubbles2} />,
  },
  [Routes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePaths[Routes.NOT_FOUND],
    icon: <Icon icon={warning} />,
  },
};
