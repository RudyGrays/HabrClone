import { lazy } from "react";

const ProfileAsync = lazy(() => {
  return import("./ProfileCard");
});

export { ProfileAsync as ProfileCard };
