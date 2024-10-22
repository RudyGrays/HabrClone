import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticleBigCardItem.module.scss";
import { Article } from "entities/Acticle";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import Icon from "react-icons-kit";
import { RoutePaths, Routes } from "app/providers/RouterProvider";
interface ArticleBigCardItemProps {
  someClasses?: string;
  article: Article;
}

const ArticleBigCardItem: FC<ArticleBigCardItemProps> = ({
  someClasses,
  article: { blocks, createdAt, id, img, subtitle, title, type, views, author },
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(mainClasses.ArticleBigCardItem, {}, [someClasses])}
    >
      <div className={classNames(mainClasses.TitleWrapper, {}, [someClasses])}>
        <div className={classNames(mainClasses.AuthorInfo, {}, [someClasses])}>
          <Avatar src={author.avatar} size={20} />
          <Text>{author.name}</Text>
        </div>

        <Text className={mainClasses.createdAt}>{createdAt}</Text>
      </div>
      <div className={classNames(mainClasses.InfoWrapper, {}, [someClasses])}>
        <Text size="large">{title}</Text>
        <Text size="small">{type.join(", ")}</Text>
      </div>
      <div className={classNames(mainClasses.ImageWrapper, {}, [someClasses])}>
        <img src={img} alt="Загрузка..." />
      </div>
      <div className={classNames(mainClasses.FooterWrapper, {}, [someClasses])}>
        <Button
          isLink={true}
          href={`${RoutePaths[Routes.ARTICLES_DETAILS]}${id}`}
        >
          {t<string>("читать далее")}
        </Button>
        <span>
          {views} <Icon icon={ic_remove_red_eye} />
        </span>
      </div>
    </div>
  );
};

export { ArticleBigCardItem };
