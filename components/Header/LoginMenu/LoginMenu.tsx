import { Menu, Transition } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Fragment, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { Button } from "react-daisyui";

export const LoginMenu = () => {
  //   const [open, setOpen] = useState();
  return (
    <Menu as="div" className="relative inline-block text-left ">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                 icon-button text-2xl align-middle`}
            >
              {open ? <IoIosCloseCircleOutline /> : <FiMenu />}
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-24 w-[300px] bg-red-200 flex flex-col gap-y-4 items-center justify-center p-4">
            <Button color="info" endIcon={<BsTwitter />}>
              Sign in with Twitter
            </Button>
            <Button className="bg-gray-400 p-2 text-center">
              Sign in with Email
            </Button>
            <ConnectButton />
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};
