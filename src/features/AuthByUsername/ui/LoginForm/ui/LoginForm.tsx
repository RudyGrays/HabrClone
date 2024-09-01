import { FC, useEffect, useRef } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./LoginForm.module.scss";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";
import { useInput } from "shared/helpers/hooks/useInput/useInput";
import { useModal } from "app/providers/ModalProvider";
interface LoginFormProps {
  someClasses?: string;
}

const LoginForm: FC<LoginFormProps> = ({ someClasses, ...props }) => {
  const { t } = useMyTranslation();
  const { isModalOpen } = useModal();

  const userName = useInput("");
  const password = useInput("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isModalOpen]);

  return (
    <form
      className={classNames(mainClasses.LoginForm, {}, [someClasses])}
      {...props}
    >
      <Text
        className={classNames(mainClasses.title, {}, [])}
        weight="bold"
        align="center"
        tag="h2"
        size="large"
      >
        {t("войти")}
      </Text>
      <div className={classNames(mainClasses.inputs, {}, [])}>
        <label htmlFor="name">
          <Text className={classNames(mainClasses.labelText, {}, [])}>
            {t("имя")}
          </Text>
          <Input
            ref={inputRef}
            id="name"
            {...userName}
            placeholder={t("вася пупкин")}
          />
        </label>
        <label htmlFor="password">
          <Text className={classNames(mainClasses.labelText, {}, [])}>
            {t("пароль")}
          </Text>
          <Input id="password" {...password} placeholder={t("пароль")} />
        </label>
      </div>
    </form>
  );
};

export { LoginForm };
