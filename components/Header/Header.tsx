import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

// Header height is controlled by the theme in tailwind.config.js

export const Header = () => {
  return (
    <div
      className={`flex items-center justify-between shadow-md p-4 fixed w-full bg-base-100 z-10 h-header`}
    >
      <div className="text-3xl ">Logo</div>

      <nav>
        <ul className="flex ">
          <li className="mx-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <ThemeToggle />
        <div className="ml-4">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};
