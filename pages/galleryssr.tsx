import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Picture } from "../modules/gallery/types";
import { GalleryCard } from "../modules/gallery/components/GalleryCard";

// Define type animals which is an array of objects
type Props = {
  pictures: Picture[];
};

const Page: NextPageWithLayout = (props: Props) => {
  return (
    <div className="w-full text-left">
      <h1>This is a server side rendered gallery</h1>
      <div className="grid grid-cols-1 grid-gap-4">
        {props.pictures.map((picture) => {
          return <GalleryCard key={picture.id} picture={picture} />;
        })}
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
