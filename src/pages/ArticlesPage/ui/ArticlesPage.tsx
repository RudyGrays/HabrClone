import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { CustomLink } from "shared/ui/CustomLink";
import { RouterConfig, Routes } from "app/providers/RouterProvider";

interface ArticlesPageProps {
  someClasses?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ someClasses }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(mainClasses.ArticlesPage, {}, [someClasses])}>
      {t<string>("страница статьи")}
      <div>
        <CustomLink to={`${RouterConfig[Routes.ARTICLES].path}/${2}`}>
          {t<string>("перейти на статью")}
        </CustomLink>
        <CustomLink to={`${RouterConfig[Routes.ARTICLES].path}/${1}`}>
          {t<string>("перейти на статью")}
        </CustomLink>
      </div>
    </div>
  );
};

export default ArticlesPage;
