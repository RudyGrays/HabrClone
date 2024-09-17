import { FC, memo, ReactNode } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Text.module.scss";

interface TextProps {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  weight?: "normal" | "bold";
  align?: "left" | "center" | "right";
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = memo(
  ({
    tag: Tag = "p",
    size = "medium",
    color,
    weight = "normal",
    align = "left",
    children,
    className,
  }) => {
    const textClassNames = classNames(mainClasses.Text, {}, [
      mainClasses[size],
      mainClasses[color],
      mainClasses[weight],
      mainClasses[align],
      className,
    ]);

    return <Tag className={textClassNames}>{children}</Tag>;
  },
);

export { Text };
