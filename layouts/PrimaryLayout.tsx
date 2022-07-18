import { Header } from "../components/Header";
import React, { FC, useContext } from "react";
import { Theme } from "react-daisyui";
import { ThemeContext } from "../contexts/ThemeContext";
import { NextPageWithLayout } from "../pages/_app";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const pageTransitionMotion = {
  initial: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

export const PrimaryLayout: FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Theme dataTheme={theme} className="min-h-screen">
      <Header />
      <AnimatePresence>
        <motion.div
          className="pt-header"
          // variants={pageTransitionMotion}
          // initial="initial"
          // animate="animate"
          // transition={{ duration: 0.5 }}
          // exit={{ opacity: 0 }}
          // key={router.pathname}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Theme>
  );
};

export const getLayout = (page: React.ReactNode) => (
  <PrimaryLayout>{page}</PrimaryLayout>
);
