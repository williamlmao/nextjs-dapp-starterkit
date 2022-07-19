import { GetServerSideProps } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { GalleryCard } from "../modules/gallery/components/GalleryCard";
import { Picture } from "../modules/gallery/types";
import { NextPageWithLayout } from "./_app";

type Props = {
  pictures: Picture[];
};

const Page: NextPageWithLayout<Props> = ({ pictures }) => {
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
  return (
    <SidebarLayout
      title="Gallery (SSR)"
      description="A server-side rendered gallery"
    >
      {page}
    </SidebarLayout>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://picsum.photos/v2/list`);
  const pictures = await res.json();
  return { props: { pictures } };
};

export default Page;
