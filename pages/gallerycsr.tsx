import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { useInfiniteGallery } from "../modules/gallery/hooks/useInfiniteGallery";
import Head from "next/head";
import { InfiniteGrid } from "../modules/gallery/components/InfiniteGrid";

const Page = () => {
  const { pictures, hasNextPage, fetchNextPage } = useInfiniteGallery();

  return (
    <div className="w-full text-left">
      <Head>
        <title>Gallery (Client Side Rendered)</title>
        <meta
          property="og:title"
          content="Gallery (Client Side Rendered)"
          key="title"
        />
        <meta
          name="description"
          content="A gallery of photos which are client side rendered. Used for comparison with the SSR gallery."
        />
      </Head>
      <h1>This is a client side rendered gallery</h1>
      <InfiniteGrid
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        pictures={pictures}
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Page;
