import { FC, memo, ReactNode } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./CustomLink.module.scss";
export interface To {
  pathname: string;
  state: { prevPath: string };
}
export interface ToState {
  prevPath: string;
}
interface CustomLinkProps extends Omit<LinkProps, "to"> {
  otherClasses?: string;
  disabled?: boolean;
  to?: To | string;
  children: ReactNode | string;
}

const CustomLink: FC<CustomLinkProps> = memo(
  ({
    children,
    disabled = false,
    to = { pathname: "/", state: { prevPath: "/" } },
    otherClasses,
  }) => {
    if (disabled) {
      return (
        <div
          className={classNames(
            mainClasses.CustomLink,
            { [mainClasses.disabled]: disabled },
            [otherClasses],
          )}
        >
          {children}
        </div>
      );
    }

    return (
      <NavLink
        to={to}
        className={classNames(mainClasses.CustomLink, {}, [otherClasses])}
      >
        {children}
      </NavLink>
    );
  },
);

export default CustomLink;
