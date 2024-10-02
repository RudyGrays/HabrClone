import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";

interface ArticlesPageProps {
  someClasses?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ someClasses }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(mainClasses.ArticlesPage, {}, [someClasses])}>
      {t<string>("страница статьи")}
    </div>
  );
};

export default ArticlesPage;
