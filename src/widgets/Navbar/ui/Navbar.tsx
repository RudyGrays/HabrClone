import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Navbar.module.scss";
import { RouterConfig } from "app/providers/router";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { CustomLink } from "shared/ui/CustomLink";

interface NavbarProps {
  otherClasses?: string;
}

const Navbar: FC<NavbarProps> = ({ otherClasses }) => {
  const { t } = useMyTranslation();
  return (
    <ul className={classNames(cls.navbar, {}, [otherClasses])}>
      {Object.keys(RouterConfig).map(
        (element: keyof typeof RouterConfig) =>
          element != "страница не найдено" && (
            <li key={element}>
              <CustomLink to={RouterConfig[element].path}>
                {t(element)}
              </CustomLink>
            </li>
          )
      )}
    </ul>
  );
};

export default Navbar;
