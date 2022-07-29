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
    <Theme dataTheme={theme}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <div className="flex flex-col h-screen">
        <Header />
        <div className="bg-base-200 flex-1 overflow-y-auto">{children}</div>
      </div>
    </Theme>
  );
};
