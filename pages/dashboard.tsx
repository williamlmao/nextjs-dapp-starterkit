import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full text-left">
      <h1>This is the dashboard</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Page;
