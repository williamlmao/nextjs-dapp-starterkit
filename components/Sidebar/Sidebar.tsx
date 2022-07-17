import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineCamera,
  AiFillCamera,
} from "react-icons/ai";

const links = [
  { name: "Home", to: "/", id: 1, icon: <AiOutlineHome /> },
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
    <motion.div
      className="h-screen fixed top-[80px] overflow-x-hidden border-r-2 bg-base-100 border-base-200 z-10"
      animate="rest"
      initial="rest"
      variants={sidebarMotion}
      transition={{ duration: 0.25 }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover="hover"
    >
      <div className="relative">
        <motion.div className="flex flex-col pt-8">
          {links.map(({ name, to, id, icon }) => (
            <motion.div key={id} whileHover={{ scale: 1.05, translateX: 3 }}>
              <motion.a
                href={to}
                className={`flex m-2 p-2 text-3xl items-center hover:text-warning hover:bg-base-300 ${
                  to === router.asPath ? "bg-base-200" : ""
                } rounded-lg`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {icon}
                <motion.span
                  variants={itemMotion}
                  transition={{ duration: 0.25 }}
                  className="text-base whitespace-nowrap"
                >
                  {name}
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
