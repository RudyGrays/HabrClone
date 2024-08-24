import { CSSProperties, FC, HTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./FlexContainer.module.scss";

interface FlexContainerProps {
  someClasses?: string;
  props?: HTMLAttributes<HTMLDivElement>;
  styleProps?: CSSProperties;
}

const FlexContainer: FC<PropsWithChildren<FlexContainerProps>> = ({
  children,
  someClasses = "",
  styleProps = {},
  ...props
}) => {
  return (
    <div
      className={classNames(mainClasses.FlexContainer, {}, [someClasses])}
      style={styleProps}
      {...props}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
