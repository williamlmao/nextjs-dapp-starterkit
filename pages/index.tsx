import type { ReactElement } from "react";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="prose text-center">
        <h1 className="">This is your homepage</h1>
        <p>
          This page is using the primary layout, which is just the header. For
          an example of a nested layout, go to Dashboard.
        </p>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Page;
