import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Error.module.scss";
import { Text } from "../Text";

interface ErrorProps {
  someClasses?: string;
  text?: string;
}

const Error: FC<ErrorProps> = ({ someClasses, text = "" }) => {
  return (
    <div className={classNames(mainClasses.Error, {}, [someClasses])}>
      <Text color="error">{text}</Text>
    </div>
  );
};

export { Error };
