import { Header } from "../components/Header";
import { FC, useContext } from "react";
import { Theme } from "react-daisyui";
import { ThemeContext } from "../contexts/ThemeContext";
import { Sidebar } from "../components/Sidebar";
import { PrimaryLayout } from "../layouts/PrimaryLayout";

type Props = {
  children: React.ReactNode;
};

export const SidebarLayout: FC<Props> = ({ children }) => {
  return (
    <PrimaryLayout>
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </PrimaryLayout>
  );
};
