import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

import { ToggleModalButton } from "widgets/Modal";
const MainPage = () => {
  const { t } = useMyTranslation();

  return (
    <div>
      {t("страница главная")}

      <ToggleModalButton id="mainModal">mainModal</ToggleModalButton>
    </div>
  );
};

export default MainPage;
