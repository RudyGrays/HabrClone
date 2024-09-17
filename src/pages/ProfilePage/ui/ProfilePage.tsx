import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ProfilePage.module.scss";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { ProfileCard } from "features/EditableProfileCard";

interface ProfilePageProps {
  someClasses?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ someClasses }) => {
  const { t } = useMyTranslation();

  return (
    <div className={classNames(mainClasses.ProfilePage, {}, [someClasses])}>
      {t("страница профиль")}
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
