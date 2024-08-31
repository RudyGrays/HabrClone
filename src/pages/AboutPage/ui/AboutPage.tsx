import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

const AboutPage = () => {
  const { t } = useMyTranslation();

  return <div>{t("страница о нас")}</div>;
};

export default AboutPage;
