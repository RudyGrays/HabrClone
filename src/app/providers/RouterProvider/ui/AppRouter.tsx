import { RouterConfig } from "app/providers/RouterProvider/config/RouterConfig";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "widgets/PageLoader/ui/PageLoader";
import { WithAuth } from "./ComponentWithAuth/WithAuth";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouterConfig).map(({ element, path, forAuthUser }) => {
          if (forAuthUser) {
            return (
              <Route
                key={path}
                element={<WithAuth>{element}</WithAuth>}
                path={path}
              />
            );
          }
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
