import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ConnectorButton from "../components/ConnectorButton.jsx";

import { useSession } from "next-auth/react";
import { getSession, signOut } from "next-auth/react";

const navigation = [
  { name: "Tokens", href: "#tokens" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "demo" },
  // { name: "Marketplace", href: "#" },
  // { name: "Company", href: "#" },
];

export default function AppBar() {
  const { data: session, status } = useSession();
  const { disconnect } = useDisconnect();

  const handle_logout = () => {
    disconnect();
    signOut({ callbackUrl: "/signin" });
  };

  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <a href="" className="flex items-center">
                  <span className="sr-only">Kolland</span>
                  <img
                    className="h-8 w-auto sm:h-10 rounded-md"
                    src="/images/logo.png"
                    alt=""
                  />
                  <a className="font-bold text-white hover:text-gray-300 text-4xl ml-5">
                    Kolland
                  </a>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="text-base font-medium text-[#999] hover:text-gray-300">
              {session?.user?.address}
            </div>
            <a href="#" className="text-white" onClick={handle_logout}>
              Logout
            </a>
            <Link href="/dashboard">
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
              >
                Dashboard
              </a>
            </Link>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto" src="/images/logo.png" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block w-full rounded-md bg-indigo-600 py-3 px-4 text-center font-medium text-white shadow hover:bg-indigo-700"
                >
                  Dashboard
                </a>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  {/* Existing customer?{" "} */}
                  <a
                    href="#"
                    className="text-gray-900 hover:underline"
                    onClick={handle_logout}
                  >
                    Logout
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    // <div
    //   className="flex w-[100%] h-[80px] fixed left-0 top-0 right-0 bottom-0 z-[98] ma mt-0 mb-0 backdrop-filter"
    // >
    //   <div className="absolute w-[100%] h-[100%] bg-[#000] flex justify-between items-center p-[18px]">
    //     <Link href="/">
    //       <a className="text-[#fff] font-900 text-[32px]">Kolland</a>
    //     </Link>
    //     {/* <ConnectorButton /> */}
    //     <div className="w-50% xl-w-auto">
    //       <div className="flex">
    //         <div className="text-white mr-[10px]">{session?.user?.address}</div>
    //         <div className="text-white" onClick={handle_logout}>Logout</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
