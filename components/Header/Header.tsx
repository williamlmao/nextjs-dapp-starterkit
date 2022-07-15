import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Theme } from "react-daisyui";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <div className="flex items-center justify-between shadow-md p-4 fixed w-full bg-base-100">
      <div className="text-3xl ">Logo</div>

      <ThemeToggle />

      <nav>
        <ul className="flex ">
          <li className="mx-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <ConnectButton />
      </div>
    </div>
  );
};
