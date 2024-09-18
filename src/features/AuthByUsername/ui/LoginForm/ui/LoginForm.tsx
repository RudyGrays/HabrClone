import { FC, memo, useEffect, useRef } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./LoginForm.module.scss";
import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";
import { useInput } from "shared/helpers/hooks/useInput/useInput";
import { useModal } from "app/providers/ModalProvider";
import { Button } from "shared/ui/Button";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { loginByUserName } from "features/AuthByUsername/model/services/loginByUserName/loginByUsername";
import { useSelector } from "react-redux";
import { Loader } from "shared/ui/Loader";
import { getUserState } from "entities/User/model/selectors/getUserState/getUserState";
import { getLoginLoading } from "features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { useDynamicReducerLoader } from "shared/helpers/hooks/useDynamicReducerLoader/useDynamicReducerLoader";
import { loginFormReducer } from "features/AuthByUsername/model/slice/loginFormSlice";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  someClasses?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ someClasses, ...props }) => {
  const { t } = useTranslation();

  const { isModalOpen, closeModal } = useModal();

  const isLoading = useSelector(getLoginLoading);

  const error = useSelector(getLoginError);

  const { authorized, authData } = useSelector(getUserState);

  const { addReducer, removeReducer } = useDynamicReducerLoader();

  useEffect(() => {
    addReducer("loginForm", loginFormReducer);

    return () => removeReducer("loginForm");
  }, []);

  const dispatch = useAppDispatch();

  const userName = useInput("");
  const password = useInput("");

  const inputRef = useRef<HTMLInputElement>(null);

  const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const loginData = {
      username: userName.value,
      password: password.value,
    };

    dispatch(loginByUserName(loginData));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (authorized) {
      timeout = setTimeout(() => {
        closeModal();
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [authorized]);

  useEffect(() => {
    userName.resetValue();
    password.resetValue();
    inputRef.current.focus();
  }, [isModalOpen]);

  return isLoading ? (
    <div className={classNames(mainClasses.loaderContainer, {}, [])}>
      <Loader />
    </div>
  ) : (
    <form
      onSubmit={login}
      className={classNames(mainClasses.LoginForm, {}, [someClasses])}
      {...props}
    >
      {isLoading && <Loader />}
      {error && <Text color="error">{error}</Text>}
      {authorized && (
        <Text color="success">
          {t<string>("вход выполнен")} {authData.username}
        </Text>
      )}
      <Text
        className={classNames(mainClasses.title, {}, [])}
        weight="bold"
        align="center"
        tag="h2"
        size="large"
      >
        {t<string>("войти")}
      </Text>
      <div className={classNames(mainClasses.inputs, {}, [])}>
        <Input
          title={t("имя")}
          ref={inputRef}
          id="name"
          {...userName}
          placeholder={t("вася пупкин")}
        />

        <Input
          title={t("пароль")}
          id="password"
          {...password}
          placeholder={t("пароль")}
        />
      </div>
      <div className={classNames(mainClasses.buttons, {}, [])}>
        <Button type="submit">
          <Text size="large">{t<string>("войти")}</Text>
        </Button>
      </div>
    </form>
  );
});

export default LoginForm;
