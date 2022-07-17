import Image from "next/image";
import { Picture } from "../types";

export const GalleryCard = ({ picture }: { picture: Picture }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-4 rounded-md my-4 w-full h-full">
      <div className="w-full h-full min-h-[100px] lg:min-h-[300px] relative">
        {picture ? (
          <Image
            src={picture.download_url}
            alt={picture.id}
            layout="fill"
            objectFit="contain"
          />
        ) : (
          ""
        )}
      </div>

      <div>{picture.author}</div>
    </div>
  );
};
