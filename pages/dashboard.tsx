import type { ReactElement } from "react";
import Head from "next/head";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";
import { Modal } from "../components/Modal";
import { Section } from "../components/Section";
import { Stats, Progress, RadialProgress } from "react-daisyui";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full text-left">
      <div className="">
        <Section title="30 Day Performance" className="my-6">
          <Stats className="shadow font-sans">
            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">Downloads</Stats.Stat.Item>
              <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
              <Stats.Stat.Item variant="desc">
                From January 1st to February 1st
              </Stats.Stat.Item>
            </Stats.Stat>

            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">Users</Stats.Stat.Item>
              <Stats.Stat.Item variant="value" className="text-secondary">
                4,200
              </Stats.Stat.Item>
              <Stats.Stat.Item variant="desc" className="text-secondary">
                ↗︎ 40 (2%)
              </Stats.Stat.Item>
            </Stats.Stat>

            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">New Registers</Stats.Stat.Item>
              <Stats.Stat.Item variant="value">1,200</Stats.Stat.Item>
              <Stats.Stat.Item variant="desc">↘︎ 90 (14%)</Stats.Stat.Item>
            </Stats.Stat>
          </Stats>
        </Section>
        <Section title="Rankings">
          <div className="flex w-full justify-around">
            <div className="flex flex-col items-center">
              <RadialProgress
                value={75}
                size="12rem"
                color="secondary"
                thickness="2rem"
              >
                75%
              </RadialProgress>
              <span className="mt-4">Bananas</span>
            </div>
            <div className="flex flex-col items-center">
              <RadialProgress
                value={65}
                size="12rem"
                color="secondary"
                thickness="2rem"
              >
                65%
              </RadialProgress>
              <span className="mt-4">Apples</span>
            </div>
            <div className="flex flex-col items-center">
              <RadialProgress
                value={81}
                size="12rem"
                color="secondary"
                thickness="2rem"
              >
                81%
              </RadialProgress>
              <span className="mt-4">Oranges</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout
      title="Dashboard"
      description="The dashboard page for this dapp starter kit."
    >
      {page}
    </SidebarLayout>
  );
};

export default Page;
