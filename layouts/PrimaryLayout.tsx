import { NextSeo } from "next-seo";
import React, { FC, useContext } from "react";
import { Theme } from "react-daisyui";
import { Header } from "../components/Header";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export const PrimaryLayout: FC<Props> = ({ children, title, description }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Theme dataTheme={theme} className="min-h-screen">
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <Header />
      <div className="pt-header">{children}</div>
    </Theme>
  );
};
