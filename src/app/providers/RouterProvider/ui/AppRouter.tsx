import { RouterConfig } from "app/providers/RouterProvider/config/RouterConfig";
import { getUserAuthorized } from "entities/User";

import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PageLoader from "widgets/PageLoader/ui/PageLoader";
const AppRouter = () => {
  const authorized = useSelector(getUserAuthorized);

  const RoutesForAuthUser = Object.values(RouterConfig).filter(route => {
    if (!route.forAuthUser) {
      return route;
    }
    if (route?.forAuthUser && authorized) {
      return route;
    }
  });

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {RoutesForAuthUser.map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
