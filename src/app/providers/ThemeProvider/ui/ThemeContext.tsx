import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export const enum EnumTheme {
  LIGHT = "light",
  DARK = "dark",
  ORANGE = "orange",
}

export const ThemeContext = createContext<ThemeContextProps>({});

interface ThemeContextProps {
  theme?: EnumTheme;
  toggleTheme?: () => void;
  isDark?: boolean;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [theme, setTheme] = useState<EnumTheme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EnumTheme) ||
      EnumTheme.LIGHT,
  );

  const toggleTheme = useCallback(() => {
    let currentTheme: EnumTheme;

    switch (theme) {
      case EnumTheme.ORANGE:
        currentTheme = EnumTheme.LIGHT;
        break;
      case EnumTheme.LIGHT:
        currentTheme = EnumTheme.DARK;
        break;
      case EnumTheme.DARK:
        currentTheme = EnumTheme.ORANGE;
        break;
      default:
        currentTheme = EnumTheme.LIGHT;
        break;
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme(currentTheme);

    setIsDark(theme === EnumTheme.DARK ? true : false);
  }, [theme]);

  const memoValue = useMemo(
    () => ({
      theme,
      isDark,
      toggleTheme,
    }),
    [theme, isDark, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={memoValue}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
