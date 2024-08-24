import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./NotFoundPage.module.scss";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

interface NotFoundPageProps {
  someClasses?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ someClasses, ...props }) => {
  const { t } = useMyTranslation();

  return (
    <div
      className={classNames(mainClasses.NotFoundPage, {}, [someClasses])}
      {...props}
    >
      {t("страница не найдено")}
    </div>
  );
};

export default NotFoundPage;
