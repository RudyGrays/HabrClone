import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "shared/ui/Text/ui/Text";
import cls from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "entities/Acticle";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text className={cls.title}> {block.title}</Text>}
        {block.paragraphs.map((paragraph, index) => (
          <Text key={paragraph} className={cls.paragraph}>
            {paragraph}
          </Text>
        ))}
      </div>
    );
  },
);
