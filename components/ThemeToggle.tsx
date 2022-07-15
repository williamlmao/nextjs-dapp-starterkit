import { useContext } from "react";
import { Toggle } from "react-daisyui";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center">
      <Toggle
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
};
