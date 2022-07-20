import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { Sidebar } from "../components/Sidebar";
import { PrimaryLayout } from "./PrimaryLayout";
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

export const AppLayout: FC<Props> = ({ children, title, description }) => {
  const router = useRouter();
  return (
    <PrimaryLayout title={title} description={description}>
      <div className="flex w-full">
        <Sidebar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="w-full p-8"
            variants={pageTransitionMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            key={router.pathname}
          >
            <div className="text-3xl font-bold mb-8">{title}</div>
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </PrimaryLayout>
  );
};
