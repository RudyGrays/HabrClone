import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "shared/ui/Text/ui/Text";
import cls from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "entities/Acticle";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && <Text className={cls.title}>{block.title}</Text>}
      </div>
    );
  },
);
