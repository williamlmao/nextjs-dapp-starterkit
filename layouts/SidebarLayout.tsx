import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { Sidebar } from "../components/Sidebar";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const pageTransitionMotion = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const SidebarLayout: FC<Props> = ({ children, title, description }) => {
  const router = useRouter();
  return (
    <PrimaryLayout title={title} description={description}>
      <div className="flex w-full">
        <Sidebar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="w-full p-8 "
            variants={pageTransitionMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            key={router.pathname}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </PrimaryLayout>
  );
};
