import { RouterConfig } from "app/providers/router/config/RouterConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "widgets/PageLoader/ui/PageLoader";
const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouterConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
