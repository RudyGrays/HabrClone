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
  someClasses?: string;
  disabled?: boolean;
  to: To;
  children: ReactNode | string;
}

const CustomLink: FC<CustomLinkProps> = memo(
  ({ children, disabled = false, to, someClasses, ...props }) => {
    if (disabled) {
      return (
        <div className={classNames(mainClasses.CustomLink, {}, [someClasses])}>
          {children}
        </div>
      );
    }

    return (
      <NavLink
        to={to}
        className={classNames(mainClasses.CustomLink, {}, [someClasses])}
        {...props}
      >
        {children}
      </NavLink>
    );
  },
);

export default CustomLink;
