import type { ReactElement } from "react";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { useInfiniteGallery } from "../modules/gallery/hooks/useInfiniteGallery";
import type { NextPageWithLayout } from "./_app";
import { GalleryCard } from "../modules/gallery/components/GalleryCard";
import { InfiniteGrid } from "../modules/gallery/components/InfiniteGrid";

const Page: NextPageWithLayout = () => {
  const { pictures, hasNextPage, fetchNextPage } = useInfiniteGallery();

  return (
    <div className="w-full text-left">
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
