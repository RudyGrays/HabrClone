import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  someClasses?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ someClasses, ...props }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(mainClasses.NotFoundPage, {}, [someClasses])}
      {...props}
    >
      {t<string>("страница не найдено")}
    </div>
  );
};

export default NotFoundPage;
