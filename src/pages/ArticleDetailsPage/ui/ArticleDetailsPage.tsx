import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
  someClasses?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ someClasses }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(mainClasses.ArticleDetailsPage, {}, [someClasses])}
    >
      {t<string>("страница статьи")}
    </div>
  );
};

export default ArticleDetailsPage;
