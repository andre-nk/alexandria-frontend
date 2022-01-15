import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsWindows, BsApple } from "react-icons/bs";
import {
  IoAddOutline,
  IoNotificationsOutline,
  IoLogoAndroid,
  IoMenuOutline
} from "react-icons/io5";

import { useAuthContext } from "../hooks/useAuthContext";
import NavLink from "./NavLink";

export default function Navbar() {
  const { user } = useAuthContext();
  const router = useRouter();

  const appsList = [
    {
      src: <Image src="/vscode.svg" width={32} height={32} />,
      title: (
        <span className="font-light text-md">
          Get <strong className="font-medium">Alexandria</strong> VSCode
          Extension
        </span>
      ),
    },
    {
      src: (
        <div className="flex space-x-4 justify-center items-center">
          <div className="pb-0.5">
            <BsApple size={24} />
          </div>
          <BsWindows size={24} />
          <VscTerminalLinux size={24} />
        </div>
      ),
      title: (
        <span className="font-light text-md">
          Get <strong className="font-medium">Alexandria</strong> Desktop Apps
        </span>
      ),
    },
    {
      src: (
        <div className="flex space-x-4 justify-center items-center">
          <div className="pb-0.5">
            <BsApple size={24} />
          </div>
          <IoLogoAndroid size={32} color="#01DF7A" />
        </div>
      ),
      title: (
        <span className="font-light text-md">
          Get <strong className="font-medium">Alexandria</strong> Mobile PWAs
        </span>
      ),
    },
  ];

  return (
    <Fragment>
      <nav className="flex lg:hidden justify-between items-center h-[4.5rem] px-5 border-b border-primary-border">
        {user != null ? (
          <div className="flex w-full justify-between items-center">
            <div className="h-8 w-8 flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
              <IoMenuOutline size={18} />
            </div>
            <Link href="/">
              <Image src="/logo.png" width={40} height={40} />
            </Link>
            <div className="h-9 w-9 rounded-full bg-primary-border overflow-clip">
              <Image src={user.photoURL} width={36} height={36} />
            </div>
          </div>
        ) : (
          <div className="flex space-x-10 w-full justify-between items-center">
            <Link href="/">
              <Image src="/logo.png" width={40} height={40} />
            </Link>
            <button
              onClick={() => {
                router.push("/auth/register");
              }}
              className="bg-primary-blue hover:bg-active-blue duration-200 rounded-md px-5 py-2.5 text-sm font-regular text-primary-white"
            >
              Get started
            </button>
          </div>
        )}
      </nav>
      <nav className="hidden lg:flex z-30 w-full justify-between items-center lg:bg-white border-b border-primary-border h-[4.5rem] px-8">
        <div
          onClick={() => {
            router.push("/app");
          }}
          className="flex space-x-4 items-center bg-white hover:bg-gray-100 py-2 px-3 cursor-pointer rounded-md duration-200"
        >
          {appsList[0].src}
          {appsList[0].title}
        </div>
        {user != null ? (
          <div className="flex space-x-12 items-center">
            <NavLink pathname="/" title="Home" />
            <NavLink pathname="/about" title="About" />
            <NavLink pathname="/notes" title="Collection" />
            <div className="flex justify-between items-center space-x-6">
              <div className="flex justify-between items-center space-x-4">
                <div className="h-8 w-8 flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
                  <IoNotificationsOutline size={18} />
                </div>
                <div className="h-8 w-8 flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
                  <IoAddOutline size={18} />
                </div>
              </div>
              <div className="h-9 w-9 rounded-full bg-primary-border overflow-clip">
                <Image src={user.photoURL} width={36} height={36} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-10 items-center">
            <NavLink pathname="/" title="Home" />
            <NavLink pathname="/about" title="About" />
            <button
              onClick={() => {
                router.push("/auth/register");
              }}
              className="bg-primary-blue hover:bg-active-blue duration-200 rounded-md px-5 py-2.5 text-sm font-regular text-primary-white"
            >
              Get started
            </button>
          </div>
        )}
      </nav>
    </Fragment>
  );
}
