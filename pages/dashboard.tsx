import type { ReactElement } from "react";
import { Alert, Progress, RadialProgress, Stats } from "react-daisyui";
import { Section } from "../components/Section";
import { AppLayout } from "../layouts/AppLayout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full text-left">
      <div className="flex flex-col gap-y-4 sm:gap-y-8">
        <Section title="Overview">
          <Stats className="w-full flex flex-col md:flex-row">
            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">Fruit sold</Stats.Stat.Item>
              <Stats.Stat.Item variant="value">31,012</Stats.Stat.Item>
              <Stats.Stat.Item variant="desc">
                From January 1st to February 1st
              </Stats.Stat.Item>
            </Stats.Stat>

            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">New Customers</Stats.Stat.Item>
              <Stats.Stat.Item variant="value" className="text-secondary">
                4,200
              </Stats.Stat.Item>
              <Stats.Stat.Item variant="desc" className="text-secondary">
                ↗︎ 40 (2%)
              </Stats.Stat.Item>
            </Stats.Stat>

            <Stats.Stat className="place-items-center">
              <Stats.Stat.Item variant="title">Happy Employees</Stats.Stat.Item>
              <Stats.Stat.Item variant="value">40</Stats.Stat.Item>
              <Stats.Stat.Item variant="desc">↘︎ 4 (11%)</Stats.Stat.Item>
            </Stats.Stat>
          </Stats>
        </Section>
        <Section title="Progress">
          <div className="flex items-center flex-col sm:flex-row gap-x-8">
            <div className="flex flex-col items-center m-2">
              <RadialProgress
                value={81}
                size="12rem"
                color="warning"
                thickness="2rem"
              >
                81%
              </RadialProgress>
              <span className="mt-4">Banana</span>
            </div>
            <div className="flex flex-col w-full gap-y-4">
              <div className="">
                <span>Blueberries</span>
                <Progress
                  className="w-full progress-primary h-[24px]"
                  value={81}
                  max={100}
                />
              </div>
              <div className="">
                <span>Lettuce</span>
                <Progress
                  className="w-full progress-success h-[24px]"
                  value={32}
                  max={100}
                />
              </div>

              <div className="">
                <span>Rhubarb</span>
                <Progress
                  className="w-full progress-secondary h-[24px]"
                  value={12}
                  max={100}
                />
              </div>
            </div>
          </div>
        </Section>
        <div className="flex flex-col sm:flex-row gap-x-8">
          <Section title="Status" className="">
            <div className="flex flex-col sm:flex-row  justify-around text-xl">
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full w-6 h-6 bg-success"></div>
                <span>Engine 1</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full w-6 h-6 bg-error"></div>
                <span>Engine 2</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="rounded-full w-6 h-6 bg-success"></div>
                <span>Engine 3</span>
              </div>
            </div>
          </Section>
          <Section
            title="Alerts"
            className="flex flex-col gap-y-2 sm:overflow-y-scroll sm:max-h-[250px]"
          >
            <Alert status="error">
              Engine 2 has a gear malfunction and has been pulled over for
              maintenance. (3:24pm)
            </Alert>
            <Alert status="success">
              Engine 3 successfully arrived at Area Q (3:08pm)
            </Alert>
            <Alert status="success">
              Engine 1 successfully arrived at Site C at (3:05pm)
            </Alert>
            <Alert status="info">
              Weather conditions look good on all planned routes for the day
              (12:02pm)
            </Alert>
          </Section>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Dashboard"
      description="The dashboard page for this dapp starter kit."
    >
      {page}
    </AppLayout>
  );
};

export default Page;
