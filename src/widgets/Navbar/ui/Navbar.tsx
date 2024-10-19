// i18next-extract-disable
import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Navbar.module.scss";
import { RouterConfig } from "app/providers/RouterProvider";
import { CustomLink } from "shared/ui/CustomLink";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthorized } from "entities/User";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  otherClasses?: string;
  short?: boolean;
}

const Navbar: FC<NavbarProps> = memo(({ otherClasses, short }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const authorized = useSelector(getUserAuthorized);

  return (
    <ul className={classNames(cls.navbar, {}, [otherClasses])}>
      {Object.keys(RouterConfig).map((element: keyof typeof RouterConfig) => {
        if (RouterConfig[element]?.forAuthUser && !authorized) {
          return;
        }
        if (RouterConfig[element].forNavbar === true) {
          return (
            <CustomLink
              disabled={pathname === RouterConfig[element].path}
              key={element}
              to={{
                pathname: RouterConfig[element].path,
                state: { prevPath: location.pathname },
              }}
            >
              <li>
                <div className={cls.icon}>{RouterConfig[element].icon}</div>
                {short && <div className={cls.link}>{t<string>(element)}</div>}
              </li>
            </CustomLink>
          );
        }
      })}
    </ul>
  );
});

export default Navbar;
