import { memo } from "react";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
const MainPage = memo(() => {
  const { t } = useMyTranslation();

  return <div>{t("страница главная")}</div>;
});

export default MainPage;
