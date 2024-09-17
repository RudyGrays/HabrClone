import { memo } from "react";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

const MessagesPage = memo(() => {
  const { t } = useMyTranslation();

  return <div>{t("страница сообщения")}</div>;
});

export default MessagesPage;
