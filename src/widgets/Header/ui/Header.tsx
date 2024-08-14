import { RouterConfig } from "app/providers/router";
import { FC } from "react";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { classNames } from "shared/lib/ClassNames/classNames";
import { CustomLink } from "shared/ui/CustomLink";
import { Logo } from "shared/ui/SvgComponents";
import { Navbar } from "widgets/Navbar";
import mainClasses from "./Header.module.scss";
interface HeaderProps {
  someClasses?: string;
}

const Header: FC<HeaderProps> = ({ someClasses, ...props }) => {
  const { t } = useMyTranslation();

  return (
    <div
      className={classNames(mainClasses.Header, {}, [someClasses])}
      {...props}
    >
      <div className={mainClasses.left}>
        <CustomLink to={"/"}>
          <Logo someClasses="white" height={40} width={40} />
        </CustomLink>
      </div>
      <div className={mainClasses.right}>
        <Navbar
          initialLinks={[
            { to: RouterConfig.main.path, pathname: t("страница главная") },
            { to: RouterConfig.about.path, pathname: t("страница о нас") },
            {
              to: RouterConfig.messages.path,
              pathname: t("страница сообщения"),
            },
          ]}
          otherClasses={classNames("", {}, [])}
        />
      </div>
    </div>
  );
};

export default Header;
