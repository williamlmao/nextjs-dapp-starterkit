import { useInfiniteQuery } from "react-query";

export const useInfiniteGallery = () => {
  const fetchPictures = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["pictures"], fetchPictures, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    });

  let pictures;
  if (data) {
    pictures = data.pages.map((page) => page.results).flat();
  } else {
    pictures = [];
  }

  return { pictures, data, isLoading, isError, hasNextPage, fetchNextPage };
};
