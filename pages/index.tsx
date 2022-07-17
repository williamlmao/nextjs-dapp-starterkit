import type { ReactElement } from "react";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";
import { Button } from "react-daisyui";
import Link from "next/link";
import Head from "next/head";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
        <meta
          name="description"
          content="The homepage. This page has a different layout than the rest of the site."
        />
      </Head>
      <div className="prose text-center -translate-y-1/2">
        <h1 className="">This is your homepage</h1>
        <p className="font-inter">
          This page is using the primary layout, which is just the header. For
          an example of a nested layout, go to Dashboard.
        </p>
      </div>
      <Link href="/dashboard">
        <Button color="primary">Go to dashboard</Button>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Page;
