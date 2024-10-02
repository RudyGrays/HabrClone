import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getUserAuthorized } from "entities/User";
import { Navigate } from "react-router-dom";

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: FC<WithAuthProps> = ({ children }) => {
  const authorized = useSelector(getUserAuthorized);

  if (authorized) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export { WithAuth };
