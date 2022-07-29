import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "react-daisyui";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">
          A starterkit for all your dapping needs.
        </h1>
        <p className="my-4 text-xl">
          This starterkit installs and configures various libraries, components,
          layouts, and animations so that you can get to building faster.
        </p>
      </div>
      <Link href="/dashboard">
        <Button color="primary">Launch the app</Button>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      title="Dapp Starterkit Marketing Page"
      description="A marketing page for your dapp."
    >
      {page}
    </PrimaryLayout>
  );
};

export default Page;
