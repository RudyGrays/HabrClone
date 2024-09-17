import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  someClasses?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  placeholder?: string;
  id?: string;
  title?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      someClasses,
      onChange,
      value = "",
      type = "text",
      title,
      id,
      placeholder = "Введите текст",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={classNames(mainClasses.Input, {}, [someClasses])}
        {...props}
      >
        {title && (
          <span
            className={classNames(mainClasses.InputTitle, {}, [someClasses])}
          >
            {title + ">"}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  },
);

export { Input };
