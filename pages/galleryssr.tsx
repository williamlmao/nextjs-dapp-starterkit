import { GetServerSideProps } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { Alert } from "react-daisyui";
import { AppLayout } from "../layouts/AppLayout";
import { GalleryCard } from "../modules/gallery/components/GalleryCard";
import { Picture } from "../modules/gallery/types";
import { NextPageWithLayout } from "./_app";

type Props = {
  pictures: Picture[];
};

const Page: NextPageWithLayout<Props> = ({ pictures }) => {
  return (
    <div className="w-full text-left">
      <Alert status="info" className="mb-4">
        This is a server-side rendered gallery. Click into a photo to see an
        example of a modal.
      </Alert>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pictures.map((picture) => (
          <GalleryCard key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Gallery (SSR)"
      description="A server-side rendered gallery"
    >
      {page}
    </AppLayout>
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
