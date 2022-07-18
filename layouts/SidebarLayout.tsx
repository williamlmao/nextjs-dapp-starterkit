import { FC } from "react";
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
        <div className="pl-[60px] w-full">
          <div className="p-8 w-full">{children}</div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export const getLayout = (page: React.ReactNode) => (
  <SidebarLayout>{page}</SidebarLayout>
);
