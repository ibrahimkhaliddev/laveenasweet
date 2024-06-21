import { Link, useLocation } from "react-router-dom";
import LaveenaLogo from "../img/Laveena-Logo.png";
import { Popover, Transition, Dialog, Tab } from "@headlessui/react";
import circleProfile from "../img/circle-profile.png";
import { Fragment, useRef, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const location = useLocation();
  return (
    <Popover className=" bg-[#68825B] sticky top-0 z-10 ">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="">
                    <div className="mx-auto lg:col-span-4 lg:mt-0 lg:max-w-none">
                      <Tab.Group as="div">
                        <div className="border-b border-gray-200">
                          <Tab.List className="-mb-px justify-center flex space-x-8">
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? "border-black bg-[#FAFAFA]"
                                    : "border-transparent",
                                  "whitespace-nowrap text-[12px] font-semibold text-[#383838] border-b-2 outline-none py-6 w-1/2"
                                )
                              }
                            >
                              SIGN IN
                            </Tab>
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? "border-black bg-[#FAFAFA]"
                                    : "border-transparent",
                                  "whitespace-nowrap text-[12px] font-semibold text-[#383838] border-b-2 outline-none py-6  w-1/2"
                                )
                              }
                            >
                              SING UP
                            </Tab>
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          <Tab.Panel className="mb-5 pt-[30px] lg:pt-[60px] px-[40px] lg:px-[70px]">
                            <h3 className="text-[20px] font-bold leading-[30px] mb-10 mt-5">
                              <form className="space-y-8 ">
                                <div className="space-y-8">
                                  <div className="">
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                      <div className="sm:col-span-full">
                                        <label
                                          htmlFor="email"
                                          className="block text-sm font-normal text-[#383838]"
                                        >
                                          Username or Email Address
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            id="useremail"
                                            name="useremail"
                                            type="text"
                                            autoComplete="useremail"
                                            className="bg-[#ECECEC] h-[40px] block w-full rounded-md border focus:border-[#ECECEC] sm:text-sm"
                                          />
                                        </div>
                                      </div>

                                      <div className="sm:col-span-full">
                                        <label
                                          htmlFor="email"
                                          className="block text-sm  font-normal text-[#383838]"
                                        >
                                          Password
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="password"
                                            className="bg-[#ECECEC] h-[40px] block w-full rounded-md border focus:border-[#ECECEC] sm:text-sm"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-[5px]">
                                    <div className="mt-3">
                                      <fieldset>
                                        <div className="space-y-4">
                                          <div className="relative flex items-start">
                                            <div className="flex h-5 items-center">
                                              <input
                                                id="rememberme"
                                                name="rememberme"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                              />
                                            </div>
                                            <div className="ml-3 text-sm">
                                              <label
                                                htmlFor="rememberme"
                                                className="font-normal text-[#383838]"
                                              >
                                                Remember Me
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-2">
                                  <button
                                    type="submit"
                                    className="w-full rounded-sm border border-transparent bg-[#D5828B] py-2 mx-0 text-sm font-medium text-white hover:bg-black focus:outline-none "
                                  >
                                    Login
                                  </button>
                                </div>
                              </form>
                            </h3>
                          </Tab.Panel>

                          <Tab.Panel className="pt-[30px] lg:pt-[60px] px-[40px] lg:px-[70px]">
                            <div className="">
                              <div className="">
                                <h3 className="text-[20px] font-bold leading-[30px] mb-10 mt-5">
                                  <form className="space-y-8 ">
                                    <div className="space-y-8">
                                      <div className="">
                                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                          <div className="sm:col-span-full">
                                            <label
                                              htmlFor="email"
                                              className="block text-sm font-normal text-[#383838]"
                                            >
                                              Username
                                            </label>
                                            <div className="mt-1">
                                              <input
                                                id="username"
                                                name="username"
                                                type="username"
                                                autoComplete="username"
                                                className="bg-[#ECECEC] h-[40px] block w-full rounded-md border focus:border-[#ECECEC] sm:text-sm"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-full">
                                            <label
                                              htmlFor="email"
                                              className="block text-sm font-normal text-[#383838]"
                                            >
                                              Email Address
                                            </label>
                                            <div className="mt-1">
                                              <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="bg-[#ECECEC] h-[40px] block w-full rounded-md border focus:border-[#ECECEC] sm:text-sm"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-full">
                                            <label
                                              htmlFor="email"
                                              className="block text-sm  font-normal text-[#383838]"
                                            >
                                              Password
                                            </label>
                                            <div className="mt-1">
                                              <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="password"
                                                className="bg-[#ECECEC] h-[40px] block w-full rounded-md border focus:border-[#ECECEC] sm:text-sm"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div>
                                        <p className="text-[#383838] text-sm font-normal leading-[23px]">
                                          Your personal data will be used to
                                          support your experience throughout
                                          this website, to manage access to your
                                          account, and for other purposes
                                          described in our{" "}
                                          <a
                                            href="privacy-policy"
                                            className="underline"
                                          >
                                            privacy policy.
                                          </a>
                                        </p>
                                      </div>
                                    </div>

                                    <div className="mt-1">
                                      <button
                                        type="submit"
                                        className="w-full rounded-sm border border-transparent bg-[#D5828B] py-2 mx-0 text-sm font-medium text-white hover:bg-black focus:outline-none "
                                      >
                                        Register
                                      </button>
                                    </div>
                                  </form>
                                </h3>
                              </div>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="flex items-center justify-between px-6 py-3 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <span className="sr-only">Your Company</span>
            <img className="h-auto w-[120px]" src={LaveenaLogo} alt="" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <svg
              class="ct-icon fill-[white]"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              aria-hidden="true"
              data-type="type-1"
            >
              <rect y="0.00" width="18" height="1.7" rx="1"></rect>
              <rect y="6.15" width="18" height="1.7" rx="1"></rect>
              <rect y="12.3" width="18" height="1.7" rx="1"></rect>
            </svg>
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-16  lg:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                {/* <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group inline-flex items-center rounded-md text-white text-[22px] font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                >
                  <span>Home</span>
                </Popover.Button> */}
                <Link
            to="/"
            className={`text-black text-[22px] hover:font-bold hover:text-white hover:white ${
              location.pathname === "/"
                ? "text-white font-bold"
                : "font-light"
            }`}
          >
            Home
          </Link>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg ">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        home
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <solution.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {solution.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {solution.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-5 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-900">
                              Enterprise
                            </div>
                            <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                              New
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Empower your entire team with even more advanced
                            tools.
                          </p>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          
          <Link
            to="/product"
            className={`text-black text-[22px]  hover:font-bold hover:text-white hover:white ${
              location.pathname === "/product"
                ? "text-white font-bold"
                : "font-light"
            }`}
          >
            Product
          </Link>
          
          <Link
            to="/blog"
            className={`text-black text-[22px] hover:font-bold hover:text-white hover:white ${
              location.pathname === "/blog"
                ? "text-white font-bold"
                : "font-light"
            }`}
          >
            Blog
          </Link>

          <Link
            to="/laveena-about-us"
            className={`text-black text-[22px]  hover:font-bold hover:text-white hover:white ${
              location.pathname === "/laveena-about-us"
                ? "text-white font-bold"
                : "font-light"
            }`}
          >
            About us
          </Link>
          <Link
            to="/branch"
            className={`text-black text-[22px]  hover:font-bold hover:text-white hover:white ${
              location.pathname === "/branch"
                ? "text-white font-bold"
                : "font-light"
            }`}
          >
            Contact Us
          </Link>
        </Popover.Group>
        <div className="hidden items-center justify-end lg:flex md:flex-1 lg:w-0">
          <img
            onClick={() => setOpen(true)}
            className="cursor-pointer w-[80px] mr-4"
            src={circleProfile}
            alt=""
          />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-[999] h-screen w-[80%] ml-auto bg-[#68825B] absolute inset-x-0 top-24 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#68825B] ring-1 ring-black ring-opacity-5">
            <div>
              <ul className=" space-y-2 py-3">
                <li className=" pb-2.5 pt-2.5">
                  <span className="px-5 text-white">Home</span>
                </li>
                <li className=" pb-2.5 pt-2.5">
                  <span className="px-5 text-white">Product</span>
                </li>
                <li className=" pb-2.5 pt-2.5">
                  <span className="px-5 text-white">Blog</span>
                </li>
                <li className=" pb-2.5 pt-2.5">
                  <span className="px-5 text-white">About Us</span>{" "}
                </li>
                <li className=" pb-2.5 pt-2.5">
                  <span className="px-5 text-white">Contact Us</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
