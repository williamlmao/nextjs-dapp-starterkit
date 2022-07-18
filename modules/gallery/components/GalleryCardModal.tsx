import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useContext } from "react";
import { Theme, Button } from "react-daisyui";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Picture } from "../types";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export function GalleryCardModal({
  modalVisible,
  setModalVisible,
  picture,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  picture: Picture;
}) {
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const { theme } = useContext(ThemeContext);
  return (
    <AnimatePresence>
      <Dialog
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        className="fixed inset-64 backdrop-blur-sm"
      >
        <Theme dataTheme={theme}>
          <motion.div
            className="fixed flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 3,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
          >
            <Dialog.Panel className="flex flex-col flex-1 z-20 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-base-200 hover:bg-base-300  p-6 h-[80vh] w-[80vw] rounded-md">
              <Dialog.Description className="text-4xl text-center mb-4">
                {picture.author}
              </Dialog.Description>
              <div className="w-full h-full relative">
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
            </Dialog.Panel>
          </motion.div>
        </Theme>
      </Dialog>
    </AnimatePresence>
  );
}
