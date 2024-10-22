import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticleSmallCardItem.module.scss";
import { Article } from "entities/Acticle";
import { Text } from "shared/ui/Text";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import Icon from "react-icons-kit";
import { useHover } from "shared/helpers/hooks/useHover/useHover";
import { useNavigate } from "react-router-dom";
import { RoutePaths, Routes } from "app/providers/RouterProvider";
interface ArticleSmallCardItemProps {
  someClasses?: string;
  article: Partial<Article>;
}

const ArticleSmallCardItem: FC<ArticleSmallCardItemProps> = ({
  someClasses,
  article: { id, img, subtitle, title, type, views, createdAt },
}) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${RoutePaths[Routes.ARTICLES_DETAILS]}${id}`)}
      className={classNames(
        mainClasses.ArticleSmallCardItem,
        { [mainClasses.isHovered]: isHovered },
        [someClasses],
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classNames(mainClasses.ImageWrapper, {}, [someClasses])}>
        <img src={img} />
        {isHovered && <span>{createdAt}</span>}
      </div>
      <div
        className={classNames(mainClasses.ContentWrapper, {}, [someClasses])}
      >
        <div
          className={classNames(mainClasses.ContentTitle, {}, [someClasses])}
        >
          <Text>{type.join(",")}</Text>
          <span>
            {views} <Icon icon={ic_remove_red_eye} />
          </span>
        </div>
        <div
          className={classNames(mainClasses.ContentSubtitle, {}, [someClasses])}
        >
          <Text>{subtitle}</Text>
        </div>
      </div>
    </div>
  );
};

export { ArticleSmallCardItem };
