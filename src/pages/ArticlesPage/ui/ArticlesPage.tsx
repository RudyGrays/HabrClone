import { FC, useLayoutEffect, useState } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { ArticlesList, ArticlesReducer } from "features/ArticlesList";
import { useDynamicReducerLoader } from "shared/helpers/hooks/useDynamicReducerLoader/useDynamicReducerLoader";
import { ItemViewType } from "features/ArticlesList/ui/ArticlesList/ArticlesList";
import Icon from "react-icons-kit";
import { ic_view_module } from "react-icons-kit/md/ic_view_module";
import { ic_view_headline_twotone } from "react-icons-kit/md/ic_view_headline_twotone";
import { ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY } from "shared/constants/constants";
interface ArticlesPageProps {
  someClasses?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ someClasses }) => {
  const { t } = useTranslation();
  useDynamicReducerLoader("articles", ArticlesReducer);
  const [itemViewType, setItemViewType] = useState<ItemViewType>("small");
  const setItemViewTypeHandler = (type: ItemViewType) => {
    localStorage.setItem(ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY, type);
    setItemViewType(type);
  };

  useLayoutEffect(() => {
    const view: ItemViewType = localStorage.getItem(
      ARTICLE_VIEW_TYPE_LOCALSTORAGE_KEY,
    ) as ItemViewType;
    if (view) {
      setItemViewType(view);
    }
  }, [itemViewType]);

  return (
    <div className={classNames(mainClasses.ArticlesPage, {}, [someClasses])}>
      {t<string>("страница статьи")}
      <div className={classNames(mainClasses.ViewSwitchers, {}, [someClasses])}>
        <Icon
          className={classNames(mainClasses.ViewSwitcherItem, {}, [
            someClasses,
          ])}
          icon={ic_view_headline_twotone}
          size={20}
          onClick={() => setItemViewTypeHandler("big")}
        />
        <Icon
          className={classNames(mainClasses.ViewSwitcherItem, {}, [
            someClasses,
          ])}
          icon={ic_view_module}
          size={22}
          onClick={() => setItemViewTypeHandler("small")}
        />
      </div>
      <ArticlesList itemViewType={itemViewType} />
    </div>
  );
};

export default ArticlesPage;
