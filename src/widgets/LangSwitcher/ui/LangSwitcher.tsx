import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  someClasses?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ someClasses, ...props }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () =>
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
      <button
        onClick={changeLanguage}
        className={classNames(mainClasses.LangSwitcher, {}, [someClasses])}
        {...props}
      >
        {t<string>("сменить язык")}
      </button>
    );
  },
);

export default LangSwitcher;
