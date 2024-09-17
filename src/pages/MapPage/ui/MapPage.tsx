import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./MapPage.module.scss";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { Map } from "widgets/Map";

interface MapPageProps {
  someClasses?: string;
}

const MapPage: FC<MapPageProps> = memo(({ someClasses, ...props }) => {
  const { t } = useMyTranslation();

  return (
    <div className={classNames(mainClasses.MapPage, {}, [someClasses])}>
      {t("страница карта")}
      <div className={classNames(mainClasses.MapContainer, {}, [someClasses])}>
        <Map />
      </div>
    </div>
  );
});

export { MapPage };
