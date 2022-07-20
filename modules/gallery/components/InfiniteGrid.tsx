import InfiniteScroll from "react-infinite-scroller";
import { GalleryCard } from "./GalleryCard";
import { Picture } from "../types";
import { motion } from "framer-motion";

export const InfiniteGrid = ({
  hasNextPage,
  fetchNextPage,
  pictures,
}: {
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  pictures: Picture[];
}) => {
  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const card = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };
  if (pictures.length === 0) {
    return <div>No pictures found</div>;
  }
  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerChildren}
        initial="hidden"
        animate="show"
      >
        {pictures.map((picture, index) => (
          <motion.div variants={card} key={picture.id}>
            <GalleryCard picture={picture} />
          </motion.div>
        ))}
      </motion.div>
    </InfiniteScroll>
  );
};
