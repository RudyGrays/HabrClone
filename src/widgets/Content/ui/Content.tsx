import { FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Content.module.scss";

interface ContentProps {
  someClasses?: string;
}

const Content: FC<PropsWithChildren<ContentProps>> = ({
  children,
  someClasses,
  ...props
}) => {
  return (
    <div
      className={classNames(mainClasses.Content, {}, [someClasses])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Content;
