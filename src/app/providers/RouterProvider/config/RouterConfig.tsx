import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import Icon from "react-icons-kit";
import { RouteProps } from "react-router-dom";
import { home } from "react-icons-kit/icomoon/home";
import { ReactElement } from "react";
import { warning } from "react-icons-kit/icomoon/warning";
import { user } from "react-icons-kit/icomoon/user";
import { ic_article } from "react-icons-kit/md/ic_article";
import { ProfilePage } from "pages/ProfilePage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticlesDetailsPage } from "pages/ArticleDetailsPage";

export const enum Routes {
  MAIN = "страница главная",
  NOT_FOUND = "страница не найдено",
  PROFILE = "страница профиль",
  PROFILE_WITH_ID = "страница профиль с идентификатором",
  ARTICLES = "страница статьи",
  ARTICLES_DETAILS = "страница одной статьи",
}

export const RoutePaths: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.NOT_FOUND]: "*",
  [Routes.ARTICLES_DETAILS]: "/articles/",
  [Routes.PROFILE]: "/profile",
  [Routes.PROFILE_WITH_ID]: "/profile/", //:id
  [Routes.ARTICLES]: "/articles",
};
interface CustomRouteProps extends RouteProps {
  icon: ReactElement;
  forAuthUser?: boolean;
  forNavbar?: boolean;
}

export const RouterConfig: Record<Routes, CustomRouteProps> = {
  [Routes.MAIN]: {
    element: <MainPage />,
    path: RoutePaths[Routes.MAIN],
    icon: <Icon icon={home} />,
    forNavbar: true,
  },
  [Routes.PROFILE]: {
    element: <ProfilePage />,
    path: `${RoutePaths[Routes.PROFILE]}`,
    icon: <Icon icon={user} />,
    forAuthUser: true,
    forNavbar: true,
  },
  [Routes.PROFILE_WITH_ID]: {
    element: <ProfilePage />,
    path: `${RoutePaths[Routes.PROFILE_WITH_ID]}:id`,
    icon: <Icon icon={user} />,
    forAuthUser: true,
    forNavbar: false,
  },
  [Routes.ARTICLES]: {
    element: <ArticlesPage />,
    path: RoutePaths[Routes.ARTICLES],
    icon: <Icon icon={ic_article} />,
    forAuthUser: true,
    forNavbar: true,
  },
  [Routes.ARTICLES_DETAILS]: {
    element: <ArticlesDetailsPage />,
    path: `${RoutePaths[Routes.ARTICLES]}/:id`,
    icon: <Icon icon={ic_article} />,
    forAuthUser: true,
    forNavbar: false,
  },
  [Routes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePaths[Routes.NOT_FOUND],
    icon: <Icon icon={warning} />,
    forNavbar: false,
  },
};
