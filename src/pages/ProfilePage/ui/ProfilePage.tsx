import { FC, memo, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ProfilePage.module.scss";
import { ProfileCard } from "features/EditableProfileCard";
import { useTranslation } from "react-i18next";
import { useDynamicReducerLoader } from "shared/helpers/hooks/useDynamicReducerLoader/useDynamicReducerLoader";
import {
  getNewProfile,
  getProfileById,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  Profile,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { updateProfileById } from "entities/Profile/model/services/updateProfileById/updateProfileById";
import { useNavigate, useParams } from "react-router-dom";

interface ProfilePageProps {
  someClasses?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ someClasses }) => {
  const { t } = useTranslation();

  useDynamicReducerLoader("profile", profileReducer);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const myId = useSelector(getUserId);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);

  const userId = id ?? myId;

  const newProfile = useSelector(getNewProfile);

  const setProfileCallback = useCallback((profile: Partial<Profile>) => {
    dispatch(profileActions.setNewProfile(profile));
  }, []);

  const setProfileAccess = useCallback(() => {
    const profileData = {
      profileData: newProfile as Profile,
      id: myId,
    };

    dispatch(updateProfileById(profileData));
  }, [dispatch, newProfile, userId]);

  const setProfileCancel = useCallback(() => {
    dispatch(profileActions.setInitialNewProfile());
  }, [dispatch]);

  const setReadonlyCallback = useCallback(
    (readonly: boolean) => {
      dispatch(profileActions.setReadonly(readonly));
    },
    [readonly],
  );

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(getProfileById(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className={classNames(mainClasses.ProfilePage, {}, [someClasses])}>
      {t<string>("страница профиль")}

      <ProfileCard
        setProfile={setProfileCallback}
        setReadonly={setReadonlyCallback}
        readonly={readonly}
        profile={newProfile}
        errors={error}
        setProfileAccess={setProfileAccess}
        setProfileCancel={setProfileCancel}
        isLoading={isLoading}
      />
    </div>
  );
});

export default ProfilePage;
