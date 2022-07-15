import React, { FC, createContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

interface ThemeContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "dark",
  setTheme: () => undefined,
});

const getThemeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme;
  }
};

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("dark");

  useEffect(() => {
    const localStorageTheme = getThemeFromLocalStorage();
    if (localStorageTheme) {
      setTheme(localStorageTheme as Theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
