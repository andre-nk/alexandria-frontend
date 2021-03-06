import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsWindows, BsApple } from "react-icons/bs";
import { IoAddOutline, IoLogoAndroid, IoMenuOutline } from "react-icons/io5";

import { useAuthContext } from "../../hooks/useAuthContext";
import NavLink from "./NavLink";
import AccountMenu from "./AccountMenu";
import ActivityMenu from "./ActivityMenu";

export default function Navbar({ isDynamic, setIsOpen }) {
  const { user } = useAuthContext();
  const [currentAppCount, setCurrentAppCount] = useState(0);
  const router = useRouter();

  const appsList = [
    {
      src: <Image src="/logo.png" width={32} height={32} />,
      title: (
        <span className="font-light text-md">
          <strong className="font-medium">alexandria.</strong>
        </span>
      ),
    },
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

  useEffect(() => {
    const appCountID = setInterval(() => {
      if (isDynamic) {
        if (currentAppCount == 3) {
          setCurrentAppCount(0);
        } else {
          setCurrentAppCount(currentAppCount + 1);
        }
      }
    }, 5000);

    return () => clearInterval(appCountID);
  });

  return (
    <Fragment>
      {/* MOBILE */}
      <nav className="flex lg:hidden justify-between items-center h-[4.5rem] px-5 border-b bg-white border-primary-border">
        {user != null ? (
          <div className="flex w-full justify-between items-center">
            <button
              onClick={setIsOpen}
              className="h-8 w-8 flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
              <IoMenuOutline size={18} />
            </button>
            <Link href="/">
              <a href="">
                <Image src="/logo.png" width={40} height={40} />
              </a>
            </Link>
            <div className="h-9 w-9 rounded-full bg-primary-border overflow-clip">
              <Image src={user.photoURL} width={36} height={36} />
            </div>
          </div>
        ) : (
          <div className="flex space-x-10 z-20 w-full justify-between items-center">
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

      {/* DESKTOP */}
      <nav className="hidden lg:flex z-30 w-full justify-between items-center bg-white border-b border-primary-border h-[4.5rem] px-8">
        <div
          onClick={() => {
            if(currentAppCount == 0){
              router.push("/");
            } else { 
              router.push("/app");
            }
          }}
          className="flex space-x-4 items-center bg-white hover:bg-gray-100 py-2 px-3 cursor-pointer rounded-md duration-200"
        >
          {appsList[currentAppCount].src}
          {appsList[currentAppCount].title}
        </div>
        {user != null ? (
          <div className="flex space-x-12 items-center">
            <NavLink pathname="/" title="Home" />
            <NavLink pathname="/about" title="About" />
            <NavLink pathname="/notes" title="Collection" />
            <div className="flex justify-between items-center space-x-6">
              <div className="flex justify-between items-center space-x-4">
                <ActivityMenu />
                <div className="h-8 w-8 flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
                  <IoAddOutline size={18} />
                </div>
              </div>
              <AccountMenu photoURL={user.photoURL} />
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
