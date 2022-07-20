import { motion } from "framer-motion";
import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeContext } from "../contexts/ThemeContext";

// ThemeToggle isn't in  /components/Header because it might be used in another menu

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      className={`text-2xl rounded-full w-10 h-10 flex items-center justify-center bg-base-200`}
      aria-label="toggle-theme"
      onClick={() => toggleTheme()}
      whileHover={{
        color: ["hsl(219, 13%, 69%)", "hsl(48, 100%, 68%)"],
        scale: 1.1,

        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.9, translateY: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
    >
      {theme === "dark" ? <BiSun /> : <BiMoon />}
    </motion.button>
  );
};
