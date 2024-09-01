import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Header.module.scss";
import { ToggleModalButton } from "widgets/Modal";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { Text } from "shared/ui/Text";
interface HeaderProps {
  someClasses?: string;
}

const Header: FC<HeaderProps> = ({ someClasses, ...props }) => {
  const { t } = useMyTranslation();

  return (
    <div
      data-testid="header_test"
      className={classNames(mainClasses.Header, {}, [someClasses])}
      {...props}
    >
      <div className={mainClasses.left}></div>
      <div className={mainClasses.right}>
        <div className={mainClasses.loginButton}>
          <ToggleModalButton id="authModal">
            <Text>{t("войти")}</Text>
          </ToggleModalButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
