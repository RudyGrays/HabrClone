import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  otherClasses?: string;
  variants?: ButtonVariants[];
  onClick?: () => void;
}
export const enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  rounded = "rounded",
  outline = "outline",
}

const Button: FC<ButtonProps> = ({
  otherClasses,
  onClick,
  variants,
  children,
}) => {
  return (
    <button
      data-testId="button_test"
      onClick={onClick}
      className={classNames(
        cls.button,
        {
          [cls[ButtonVariants.outline]]: variants?.find(
            item => item == ButtonVariants.outline,
          ),
          [cls[ButtonVariants.primary]]: variants?.find(
            item => item == ButtonVariants.primary,
          ),
          [cls[ButtonVariants.rounded]]: variants?.find(
            item => item == ButtonVariants.rounded,
          ),
          [cls[ButtonVariants.secondary]]: variants?.find(
            item => item == ButtonVariants.secondary,
          ),
        },
        [otherClasses],
      )}
    >
      {children}
    </button>
  );
};

export { Button };
