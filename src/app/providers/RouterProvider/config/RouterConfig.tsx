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
import { MapPage } from "pages/MapPage";
import { map2 } from "react-icons-kit/icomoon/map2";
import { user } from "react-icons-kit/icomoon/user";
import { ProfilePage } from "pages/ProfilePage";

export const enum Routes {
  MAIN = "страница главная",
  ABOUT = "страница о нас",
  MESSAGES = "страница сообщения",
  NOT_FOUND = "страница не найдено",
  MAP = "страница карта",
  PROFILE = "страница профиль",
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
  [Routes.MESSAGES]: "/messages",
  [Routes.NOT_FOUND]: "*",
  [Routes.MAP]: "/map",
  [Routes.PROFILE]: "/profile",
};
interface CustomRouteProps extends RouteProps {
  icon: ReactElement;
  forAuthUser?: boolean;
}

export const RouterConfig: Record<Routes, CustomRouteProps> = {
  [Routes.MAIN]: {
    element: <MainPage />,
    path: RoutePaths[Routes.MAIN],
    icon: <Icon icon={home} />,
  },
  [Routes.PROFILE]: {
    element: <ProfilePage />,
    path: RoutePaths[Routes.PROFILE],
    icon: <Icon icon={user} />,
    forAuthUser: true,
  },
  [Routes.MAP]: {
    element: <MapPage />,
    path: RoutePaths[Routes.MAP],
    icon: <Icon icon={map2} />,
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
