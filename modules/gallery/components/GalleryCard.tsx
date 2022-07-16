import Image from "next/image";
import { Picture } from "../types";

export const GalleryCard = ({ picture }: { picture: Picture }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-4 rounded-md my-4">
      <div className="w-[160px] h-[90px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px] relative">
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
