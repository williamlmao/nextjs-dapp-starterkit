import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Picture } from "../modules/gallery/types";
import { GalleryCard } from "../modules/gallery/components/GalleryCard";
import Head from "next/head";
import { NextPage } from "next";

// Define type animals which is an array of objects
type Props = {
  pictures: Picture[];
};

const Page = ({ pictures }: { pictures: Picture[] }) => {
  <Head>
    <title>Gallery (Server Side Rendered)</title>
    <meta
      property="og:title"
      content="Gallery (Client Side Rendered)"
      key="title"
    />
    <meta
      name="description"
      content="A gallery of photos which are client side rendered. Used for comparison with the SSR gallery."
    />
  </Head>;
  return (
    <div className="w-full text-left">
      <h1>This is a server side rendered gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-gap-4">
        {pictures.map((picture) => (
          <GalleryCard key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://picsum.photos/v2/list`);
  const pictures = await res.json();
  return { props: { pictures } };
};

export default Page;
