import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./PageError.module.scss";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

interface PageErrorProps {
  someClasses?: string;
}

const PageError: FC<PageErrorProps> = ({ someClasses, ...props }) => {
  const { t } = useMyTranslation();
  const refreshSite = () => {
    window.location.reload();
  };
  return (
    <div
      className={classNames(mainClasses.PageError, {}, [someClasses])}
      {...props}
    >
      <b>{t("страница с ошибкой")}</b>
      <button onClick={refreshSite}>{t("перезагрузить сайт") as string}</button>
    </div>
  );
};

export default PageError;
