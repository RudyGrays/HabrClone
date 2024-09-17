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
    localStorage.setItem(
      LOCAL_STORAGE_THEME_KEY,
      theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT,
    );
    setIsDark(theme === EnumTheme.LIGHT ? false : true);
    setTheme(theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT);
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
