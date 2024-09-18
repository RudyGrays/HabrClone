import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  someClasses?: string;
}

const PageError: FC<PageErrorProps> = ({ someClasses, ...props }) => {
  const { t } = useTranslation();
  const refreshSite = () => {
    window.location.reload();
  };
  return (
    <div
      className={classNames(mainClasses.PageError, {}, [someClasses])}
      {...props}
    >
      <b>{t<string>("страница с ошибкой")}</b>
      <button onClick={refreshSite}>{t<string>("перезагрузить сайт")}</button>
    </div>
  );
};

export default PageError;
