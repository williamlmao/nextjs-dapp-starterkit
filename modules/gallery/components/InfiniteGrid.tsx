import InfiniteScroll from "react-infinite-scroller";
import { GalleryCard } from "./GalleryCard";
import { Picture } from "../types";

export const InfiniteGrid = ({
  hasNextPage,
  fetchNextPage,
  pictures,
}: {
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  pictures: Picture[];
}) => {
  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
      <div className="grid grid-cols-1 grid-gap-4">
        {pictures.map((picture) => (
          <GalleryCard key={picture.id} picture={picture} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
