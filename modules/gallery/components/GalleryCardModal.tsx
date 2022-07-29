import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { Button, Theme } from "react-daisyui";
import { IoIosClose } from "react-icons/io";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Picture } from "../types";

export const GalleryCardModal = ({
  modalVisible,
  setModalVisible,
  picture,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  picture: Picture;
}) => {
  const { theme } = useContext(ThemeContext);

  const modalMotion = {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.24,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  };

  return (
    <AnimatePresence>
      {modalVisible && (
        <Dialog
          open={modalVisible}
          onClose={() => setModalVisible(false)}
          as="div"
          className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto backdrop-blur-sm"
        >
          <motion.div
            variants={modalMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Theme
              dataTheme={theme}
              className="w-[80vw] h-[80vh] bg-base-300 p-12  relative rounded-xl flex flex-1 flex-col"
            >
              <Dialog.Description className="text-xl sm:text-4xl text-center mb-4">
                {picture.author}
              </Dialog.Description>
              <div className="w-full h-full min-w-[200px] min-h-[200px] relative">
                <Image
                  src={picture.download_url}
                  alt={picture.id}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Button
                shape="circle"
                size="xs"
                className="absolute top-2 right-2"
                onClick={() => setModalVisible(false)}
              >
                <IoIosClose className="text-lg" />
              </Button>
            </Theme>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
