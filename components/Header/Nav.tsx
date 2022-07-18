import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Dashboard", to: "/dashboard", id: 2 },
  { name: "Profile", to: "/profile", id: 3 },
  { name: "Gallery SSR", to: "/galleryssr", id: 4 },
];

export const Nav = () => {
  return (
    <nav>
      <ul className="flex ">
        {links.map(({ name, to, id }) => (
          <motion.li key={id} className="mx-4" whileHover={{ scale: 1.1 }}>
            <Link href={to}>
              <a className="font-bold">{name}</a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
