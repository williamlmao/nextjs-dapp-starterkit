import type { ReactElement } from "react";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="">
      <div className="h-[2000px] ">hiskdbshdfkjsdfbksj</div>
      <div className="h-[2000px] bg-green-200">hi</div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Page;
