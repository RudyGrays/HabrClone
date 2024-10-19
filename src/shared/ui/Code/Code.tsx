import { classNames } from "shared/lib/ClassNames/classNames";
import { memo, useCallback, useState } from "react";
import { Button } from "shared/ui/Button";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import cls from "./Code.module.scss";
import Icon from "react-icons-kit";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const [copySuccess, setCopySuccess] = useState(false);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    const timer = setTimeout(() => {
      setCopySuccess(false);
      clearTimeout(timer);
    }, 2000);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn}>
        <Icon
          className={cls.copyBtn}
          icon={copySuccess ? checkmark : ic_content_copy}
        />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
