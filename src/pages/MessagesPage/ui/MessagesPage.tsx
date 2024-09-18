import { memo } from "react";
import { useTranslation } from "react-i18next";

const MessagesPage = memo(() => {
  const { t } = useTranslation();

  return <div>{t<string>("страница сообщения")}</div>;
});

export default MessagesPage;
