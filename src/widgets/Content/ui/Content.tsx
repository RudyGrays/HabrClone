import { FC, memo, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Content.module.scss";

interface ContentProps {
  someClasses?: string;
}

const Content: FC<PropsWithChildren<ContentProps>> = memo(
  ({ children, someClasses }) => {
    return (
      <div className={classNames(mainClasses.Content, {}, [someClasses])}>
        {children}
      </div>
    );
  },
);

export default Content;
