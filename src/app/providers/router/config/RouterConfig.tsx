import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { MessagesPage } from "pages/MessagesPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

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

export const RouterConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    element: <MainPage />,
    path: RoutePaths[Routes.MAIN],
  },
  [Routes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePaths[Routes.ABOUT],
  },
  [Routes.MESSAGES]: {
    element: <MessagesPage />,
    path: RoutePaths[Routes.MESSAGES],
  },
  [Routes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePaths[Routes.NOT_FOUND],
  },
};
