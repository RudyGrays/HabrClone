import { FC } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./CustomLink.module.scss";
interface CustomLinkProps extends LinkProps {
  someClasses?: string;
}

const CustomLink: FC<CustomLinkProps> = ({
  children,
  someClasses,
  ...props
}) => {
  return (
    <NavLink
      className={classNames(mainClasses.CustomLink, {}, [someClasses])}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
