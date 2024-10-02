import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t<string>("страница о нас")}
      <div></div>
    </div>
  );
};

export default AboutPage;
