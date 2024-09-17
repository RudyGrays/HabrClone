import { FC, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ProfileCard.module.scss";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { useSelector } from "react-redux";
import {
  getProfileById,
  getProfileError,
  getProfileLoading,
  getProfileState,
  profileReducer,
} from "entities/Profile";
import { useDynamicReducerLoader } from "shared/helpers/hooks/useDynamicReducerLoader/useDynamicReducerLoader";
import { Loader } from "shared/ui/Loader";
import { Error } from "shared/ui/Error/Error";
import { Input } from "shared/ui/Input";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";

import { getUserId } from "entities/User";

interface ProfileCardProps {
  someClasses?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ someClasses }) => {
  const { t } = useMyTranslation();

  const dispatch = useAppDispatch();

  const { age, country, lastname, name } = useSelector(getProfileState);
  const id = useSelector(getUserId);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  const { addReducer, removeReducer } = useDynamicReducerLoader();

  useEffect(() => {
    addReducer("profile", profileReducer);

    return () => removeReducer("profile");
  }, []);

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classNames(mainClasses.ProfileCard, {}, [someClasses])}>
        <div className={classNames(mainClasses.Loading, {}, [someClasses])}>
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(mainClasses.ProfileCard, {}, [someClasses])}>
        <div className={classNames(mainClasses.Error, {}, [someClasses])}>
          <Error text={error} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(mainClasses.ProfileCard, {}, [someClasses])}>
      <Input title={t("имя")} id="name" value={name} />
      <Input title={t("фамилия")} id="lastname" value={lastname} />
      <Input title={t("страна")} id="country" value={country} />
      <Input title={t("возраст")} id="age" value={age} />
    </div>
  );
};

export default ProfileCard;
