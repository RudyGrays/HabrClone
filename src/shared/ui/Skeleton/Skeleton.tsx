import { classNames } from "shared/lib/ClassNames/classNames";
import { CSSProperties, FC, memo, ReactNode } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  children?: ReactNode;
}

export const Skeleton: FC<SkeletonProps> = memo(props => {
  const { className, height, width, border, children } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles}>
      {children}
    </div>
  );
});
