import type { ReactElement } from "react";
import { Steps } from "react-daisyui";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full text-center">
      <div>This is the profile page</div>
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
  return (
    <SidebarLayout title="Profile" description="A profile page.">
      {page}
    </SidebarLayout>
  );
};

export default Page;
