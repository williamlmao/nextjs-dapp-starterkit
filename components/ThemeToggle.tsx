import { motion } from "framer-motion";
import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeContext } from "../contexts/ThemeContext";
export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const primaryHsl =
    theme === "light" ? "hsl(219, 13%, 69%)" : "hsl(0, 0%, 0%)";
  return (
    <motion.button
      className="text-2xl text-primary"
      onClick={() => toggleTheme()}
      whileHover={{
        color: [primaryHsl, "hsl(55, 94%, 37%)"],
        scale: 1.2,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? <BiSun /> : <BiMoon />}
    </motion.button>
  );
};
