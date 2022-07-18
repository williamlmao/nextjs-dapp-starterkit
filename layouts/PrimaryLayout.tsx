import { Header } from "../components/Header";
import React, { FC, useContext } from "react";
import { Theme } from "react-daisyui";
import { ThemeContext } from "../contexts/ThemeContext";
import { NextPageWithLayout } from "../pages/_app";

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

export const getLayout = (page: React.ReactNode) => (
  <PrimaryLayout>{page}</PrimaryLayout>
);
