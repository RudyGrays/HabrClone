import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Navbar.module.scss";
import { RouterConfig } from "app/providers/router";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { CustomLink } from "shared/ui/CustomLink";
interface NavbarProps {
  otherClasses?: string;
  short?: boolean;
}

const Navbar: FC<NavbarProps> = ({ otherClasses, short }) => {
  const { t } = useMyTranslation();
  return (
    <ul className={classNames(cls.navbar, {}, [otherClasses])}>
      {Object.keys(RouterConfig).map(
        (element: keyof typeof RouterConfig) =>
          element != "страница не найдено" && (
            <CustomLink key={element} to={RouterConfig[element].path}>
              <li>
                <div className={cls.icon}>{RouterConfig[element].icon}</div>
                {short && <div className={cls.link}>{t(element)}</div>}
              </li>
            </CustomLink>
          ),
      )}
    </ul>
  );
};

export default Navbar;
