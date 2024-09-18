import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Header.module.scss";
import { ToggleModalButton } from "widgets/Modal";
import { Text } from "shared/ui/Text";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { getUserAuthorized, userActions } from "entities/User";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface HeaderProps {
  someClasses?: string;
}

const Header: FC<HeaderProps> = memo(({ someClasses }) => {
  const { t } = useTranslation();
  const authorized = useSelector(getUserAuthorized);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/");
  };

  return (
    <div
      data-testid="header_test"
      className={classNames(mainClasses.Header, {}, [someClasses])}
    >
      <div className={mainClasses.left}></div>
      <div className={mainClasses.right}>
        {!authorized ? (
          <div className={mainClasses.loginButton}>
            <ToggleModalButton id="authModal">
              <Text>{t<string>("войти")}</Text>
            </ToggleModalButton>
          </div>
        ) : (
          <div className={mainClasses.logoutButton}>
            <Button onClick={() => logout()}>{t<string>("выйти")}</Button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Header;
