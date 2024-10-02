import { lazy } from "react";

export const ArticlesPageAsync = lazy(() => {
  return import("../ui/ArticlesPage");
});
