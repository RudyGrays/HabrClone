import { ChangeEvent, FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ProfileCard.module.scss";
import { Profile, ProfileErrors } from "entities/Profile";
import { Loader } from "shared/ui/Loader";
import { Input } from "shared/ui/Input";

import { useTranslation } from "react-i18next";
import { Button, ButtonVariants } from "shared/ui/Button";
import { ProfileErrorsEnum } from "entities/Profile";
import { Text } from "shared/ui/Text";
import { ServerErrorsEnum } from "app/types/globalType";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User";

interface ProfileCardProps {
  someClasses?: string;
  readonly?: boolean;
  profile: Partial<Profile>;
  isLoading?: boolean;
  errors?: ProfileErrors | ServerErrorsEnum[];
  setProfileCancel?: () => void;
  setProfile?: (userData: Partial<Profile>) => void;
  setReadonly?: (readonly: boolean) => void;
  setProfileAccess?: () => void;
}
interface ProfileCardErrorProps {
  errors: ProfileErrors | ServerErrorsEnum[];
  errorType?: ProfileErrorsEnum;
}

const ProfileCardError: FC<ProfileCardErrorProps> = ({ errors, errorType }) => {
  const error = errors.find(err => err === errorType);
  const { t } = useTranslation();
  return <Text color="error">{t<string>(error)}</Text>;
};

const ProfileCard: FC<ProfileCardProps> = ({
  someClasses,
  profile: { age, country, lastname, name, id },
  readonly = true,
  setReadonly,
  setProfile,
  setProfileAccess,
  setProfileCancel,
  errors = [],
  isLoading = false,
}) => {
  const { t } = useTranslation();
  const currentUser = useSelector(getUserId);
  if (isLoading) {
    return (
      <div className={classNames(mainClasses.ProfileCard, {}, [someClasses])}>
        <div className={classNames(mainClasses.Loading, {}, [someClasses])}>
          <Loader />
        </div>
      </div>
    );
  }

  if (errors.length === 1 && errors[0] === ServerErrorsEnum.SERVER_ERROR) {
    return (
      <div className={classNames(mainClasses.ProfileCard, {}, [someClasses])}>
        <div className={classNames(mainClasses.Error, {}, [someClasses])}>
          <Text color="error">{errors}</Text>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        mainClasses.ProfileCard,
        {
          [mainClasses.edit]: !readonly,
          [mainClasses.errors]: errors.length > 0,
        },
        [someClasses],
      )}
    >
      <div>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ name: e.target.value })
          }
          readOnly={readonly}
          title={t<string>("имя")}
          id="name"
          value={name}
        />
        {errors && errors.length > 0 && (
          <ProfileCardError
            errors={errors}
            errorType={ProfileErrorsEnum.INCORRECT_USERNAME}
          />
        )}
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ lastname: e.target.value })
          }
          readOnly={readonly}
          title={t<string>("фамилия")}
          id="lastname"
          value={lastname}
        />
        {errors && errors.length > 0 && (
          <ProfileCardError
            errors={errors}
            errorType={ProfileErrorsEnum.INCORRECT_LASTNAME}
          />
        )}

        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ country: e.target.value })
          }
          readOnly={readonly}
          title={t<string>("страна")}
          id="country"
          value={country}
        />
        {errors && errors.length > 0 && (
          <ProfileCardError
            errors={errors}
            errorType={ProfileErrorsEnum.INCORRECT_COUNTRY}
          />
        )}

        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ age: e.target.value })
          }
          readOnly={readonly}
          title={t<string>("возраст")}
          id="age"
          value={age}
        />
        {errors && errors.length > 0 && (
          <ProfileCardError
            errors={errors}
            errorType={ProfileErrorsEnum.INCORRECT_AGE}
          />
        )}
      </div>
      {id === currentUser && (
        <div className={classNames(mainClasses.Buttons, {}, [someClasses])}>
          {!readonly ? (
            <>
              <Button
                onClick={setProfileAccess}
                variants={[ButtonVariants.outline, ButtonVariants.rounded]}
              >
                {t<string>("подтвердить")}
              </Button>
              <Button
                onClick={() => {
                  setReadonly(true);
                  setProfileCancel();
                }}
                variants={[ButtonVariants.rounded, ButtonVariants.warning]}
              >
                {t<string>("отмена")}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setReadonly(false)}
              variants={[ButtonVariants.outline, ButtonVariants.rounded]}
            >
              {t<string>("редактировать")}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
