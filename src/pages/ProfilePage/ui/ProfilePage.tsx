import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ProfilePage.module.scss";
import { ProfileCard } from "features/EditableProfileCard";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  someClasses?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ someClasses }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(mainClasses.ProfilePage, {}, [someClasses])}>
      {t<string>("страница профиль")}
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
