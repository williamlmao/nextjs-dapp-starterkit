import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import {
  AiFillCamera,
  AiOutlineCamera,
  AiOutlineDashboard,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const links = [
  { name: "Dashboard", to: "/dashboard", id: 2, icon: <AiOutlineDashboard /> },
  {
    name: "Gallery (SSR)",
    to: "/galleryssr",
    id: 3,
    icon: <AiOutlineCamera />,
  },
  {
    name: "Gallery (CSR)",
    to: "/gallerycsr",
    id: 4,
    icon: <AiFillCamera />,
  },
  { name: "Profile", to: "/profile", id: 5, icon: <AiOutlineUser /> },
];

const sidebarMotion = {
  hover: { opacity: 1, width: 300 },
  rest: { opacity: 1, width: 60 },
};

const itemMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween", width: 0 },
  hover: {
    marginLeft: 10,
    width: 100,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="">
      <div className="h-[calc(100vh_-_80px)]  overflow-x-hidden border-r-2 bg-red-100 border-base-200 z-10 min-w-[60px]"></div>
      <motion.div
        className="h-[calc(100vh_-_80px)] fixed top-[80px] overflow-x-hidden border-r-2 bg-base-100 border-base-200 z-20"
        animate="rest"
        initial="rest"
        variants={sidebarMotion}
        transition={{ duration: 0.25 }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover="hover"
      >
        <div className="relative flex flex-col justify-between h-[calc(100vh_-_80px)]">
          <motion.div className="flex flex-col pt-8">
            {links.map(({ name, to, id, icon }) => (
              <Link key={id} href={to}>
                <motion.div
                  whileHover={{ scale: 1.05, translateX: 3 }}
                  className={`flex m-2 p-2 text-3xl items-center hover:text-warning hover:bg-base-300 hover:cursor-pointer ${
                    to === router.asPath ? "bg-base-200" : ""
                  } rounded-lg`}
                >
                  {icon}
                  <motion.span
                    variants={itemMotion}
                    transition={{ duration: 0.25 }}
                    className="text-base whitespace-nowrap"
                  >
                    {name}
                  </motion.span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          <motion.div className="py-8 flex flex-col">
            <a
              href="https://github.com/williamlmao/nextjs-dapp-starterkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05, translateX: 3 }}
                className={`flex m-2 p-2 text-3xl items-center hover:text-warning hover:bg-base-300 hover:cursor-pointer
              } rounded-lg`}
              >
                <BsGithub className="text-4xl" />

                <motion.span
                  variants={itemMotion}
                  transition={{ duration: 0.25 }}
                  className="text-base whitespace-nowrap"
                >
                  Star this repo for good karma
                </motion.span>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
