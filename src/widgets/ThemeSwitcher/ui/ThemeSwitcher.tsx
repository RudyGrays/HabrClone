import { useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  someClasses?: string;
  props?: unknown;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ someClasses, ...props }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div
      className={classNames(mainClasses.themeSwitcher, {}, [someClasses])}
      onClick={toggleTheme}
      {...props}
    >
      {isDark ? <DarkIcon /> : <LightIcon />}
    </div>
  );
};

export default ThemeSwitcher;
