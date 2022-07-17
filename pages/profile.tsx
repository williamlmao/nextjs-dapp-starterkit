import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";
import { Steps } from "react-daisyui";
import Head from "next/head";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full text-center">
      <Head>
        <title>Profile</title>
        <meta property="og:title" content="Profile" key="title" />
        <meta name="description" content="A profile page." />
      </Head>
      ;<div>This is the profile page</div>
      <Steps>
        <Steps.Step color="primary">Download repo</Steps.Step>
        <Steps.Step color="primary">Run locally</Steps.Step>
        <Steps.Step>Customize</Steps.Step>
        <Steps.Step>Ship</Steps.Step>
      </Steps>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Page;
