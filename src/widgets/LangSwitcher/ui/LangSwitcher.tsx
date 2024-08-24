import { FC } from "react";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  someClasses?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ someClasses, ...props }) => {
  const { t, i18n } = useMyTranslation();

  const changeLanguage = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <button
      onClick={changeLanguage}
      className={classNames(mainClasses.LangSwitcher, {}, [someClasses])}
      {...props}
    >
      {t("сменить язык")}
    </button>
  );
};

export default LangSwitcher;
