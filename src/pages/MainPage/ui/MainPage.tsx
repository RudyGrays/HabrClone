import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
const MainPage = () => {
  const { t } = useMyTranslation();

  return <div>{t("страница главная")}</div>;
};

export default MainPage;
