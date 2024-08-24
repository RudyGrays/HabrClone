import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { Button, ButtonVariants } from "shared/ui/Button";

const AboutPage = () => {
  const { t } = useMyTranslation();

  return (
    <div>
      {t("страница о нас")}
      <Button variants={[ButtonVariants.outline]}>{t("страница о нас")}</Button>
    </div>
  );
};

export default AboutPage;
