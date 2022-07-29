import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { LoginMenu } from "./LoginMenu";
import { Nav } from "./Nav";

// Header height is controlled by the theme in tailwind.config.js

export const Header = () => {
  return (
    <div
      className={`flex items-center justify-between shadow-md p-4 w-full bg-base-100 z-20 h-header`}
    >
      <Link href="/">
        <span className="text-3xl font-extrabold hover:cursor-pointer">
          Logo
        </span>
      </Link>

      <div className="items-center justify-between">
        <div className="flex">
          <ThemeToggle />

          <div className="ml-4">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};
