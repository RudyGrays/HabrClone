import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./MapPage.module.scss";
import { Map } from "widgets/Map";
import { useTranslation } from "react-i18next";

interface MapPageProps {
  someClasses?: string;
}

const MapPage: FC<MapPageProps> = memo(({ someClasses, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(mainClasses.MapPage, {}, [someClasses])}>
      {t<string>("страница карта")}
      <div className={classNames(mainClasses.MapContainer, {}, [someClasses])}>
        <Map />
      </div>
    </div>
  );
});

export { MapPage };
