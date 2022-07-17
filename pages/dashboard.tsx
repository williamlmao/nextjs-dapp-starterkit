import type { ReactElement } from "react";
import Head from "next/head";
import { SidebarLayout } from "../layouts/SidebarLayout";

const Page = () => {
  return (
    <div className="w-full text-left">
      <Head>
        <title>Dashboard</title>
        <meta property="og:title" content="Dashboard" key="title" />
        <meta
          name="description"
          content="The dashboard page for this dapp starter kit."
        />
      </Head>
      <h1>This is the dashboard</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Page;
