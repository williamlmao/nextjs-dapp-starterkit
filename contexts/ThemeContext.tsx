import React, { FC, createContext } from "react";

interface Props {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

interface ThemeContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  setTheme: () => undefined,
});

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
