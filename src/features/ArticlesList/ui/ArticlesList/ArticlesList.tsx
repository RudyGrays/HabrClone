import { FC, memo, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticlesList.module.scss";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { getArticles } from "features/ArticlesList/model/services/getArticles";
import { ArticleSmallCardItem } from "../ArticleSmallCardItem/ArticleSmallCardItem";
import { ArticleBigCardItem } from "../ArticleBigCardItem/ArticleBigCardItem";
import { useSelector } from "react-redux";
import { getArticlesSelector } from "features/ArticlesList/model/selectors/selectors";

interface ArticlesListProps {
  someClasses?: string;
  itemViewType: ItemViewType;
}
export type ItemViewType = "big" | "small";

// const testArticle: Partial<Article> = {
//   img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
//   createdAt: "26.02.2022",
//   id: "1",
//   views: 1022,
//   type: [ArticleType.IT, ArticleType.ECONOMICS],
//   title: "Javascript news",
//   subtitle: "Что нового в JS за 2022 год?",
//   author: {
//     avatar:
//       "https://steamuserimages-a.akamaihd.net/ugc/2363895241297742752/81B60A3E034374380603D798A5EA4DDAD1AB6859/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false",
//     id: "1",
//     name: "rusad",
//   },
// };

// const articles = new Array(10).fill(testArticle);

const ArticlesList: FC<ArticlesListProps> = memo(
  ({ someClasses, itemViewType = "small" }) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticlesSelector.selectAll);

    useEffect(() => {
      dispatch(getArticles());
    }, []);

    return (
      <ul className={classNames(mainClasses.ArticlesList, {}, [someClasses])}>
        {articles.map(article => {
          return itemViewType === "small" ? (
            <ArticleSmallCardItem article={article} />
          ) : (
            <ArticleBigCardItem article={article} />
          );
        })}
      </ul>
    );
  },
);

export { ArticlesList };
