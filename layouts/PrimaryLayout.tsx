import { Header } from "../components/Header";
import { FC, useContext } from "react";
import { Theme } from "react-daisyui";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {
  children: React.ReactNode;
};

export const PrimaryLayout: FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Theme dataTheme={theme} className="min-h-screen">
      <div>
        <Header />
        <div className="pt-header">{children}</div>
      </div>
    </Theme>
  );
};
