import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
  someClasses?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ someClasses, ...props }) => {
  return (
    <div
      className={classNames(mainClasses.PageLoader, {}, [someClasses])}
      {...props}
    >
      <Loader />
    </div>
  );
};

export default PageLoader;
