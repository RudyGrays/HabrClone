import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ArticleSmallSkeleton.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleSmallSkeletonProps {
  someClasses?: string;
}

const ArticleSmallSkeleton: FC<ArticleSmallSkeletonProps> = ({
  someClasses,
  ...props
}) => {
  return (
    <div
      className={classNames(mainClasses.ArticleSmallSkeleton, {}, [
        someClasses,
      ])}
      {...props}
    >
      <Skeleton width={200} height={280}>
        <Skeleton width={180} height={150} />
      </Skeleton>
    </div>
  );
};

export { ArticleSmallSkeleton };
