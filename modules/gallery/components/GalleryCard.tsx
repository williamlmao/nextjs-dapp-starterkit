import Image from "next/image";
import { useState } from "react";
import { Picture } from "../types";
import { GalleryCardModal } from "./GalleryCardModal";
import { motion } from "framer-motion";

export const GalleryCard = ({ picture }: { picture: Picture }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <GalleryCardModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        picture={picture}
      />
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex flex-col items-center justify-center bg-base-100 hover:bg-base-300 hover:cursor-pointer p-4 rounded-md"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        <div className="w-full min-h-[100px] lg:min-h-[300px] relative">
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
      </motion.div>
    </>
  );
};
