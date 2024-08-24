import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Loader.module.scss";

interface LoaderProps {
  someClasses?: string;
}

const Loader: FC<LoaderProps> = ({ someClasses, ...props }) => {
  return (
    <div className={classNames(mainClasses["lds-roller"], {}, [someClasses])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
