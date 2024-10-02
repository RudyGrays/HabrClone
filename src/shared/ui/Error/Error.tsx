import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Error.module.scss";
import { Text } from "../Text";

interface ErrorProps {
  otherClasses?: string;
  text?: string;
}

const Error: FC<ErrorProps> = ({ otherClasses, text = "" }) => {
  return (
    <div className={classNames(mainClasses.Error, {}, [otherClasses])}>
      <Text color="error">{text}</Text>
    </div>
  );
};

export { Error };
