import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import BelgiumChocolateCake from "../img/BelgiumFlouelessChocolateCake.png";
import COCONUTPIE1 from "../img/COCONUT-PIE-1.png";
import SanKaYa1 from "../img/San-Ka-Ya_1.png";
import PuddingChocolateCake from "../img/PuddingChocolateCake.jpg";
import ChocolateMousseCake from "../img/ChocolateMousseCake.jpg";
import ORIGINALMILO from "../img/ORIGINALMILO.png";
import IconRight from "../img/icon-right.png";

function LaveenaShop() {
  const products = [
   
    {
      name: "Pudding Chocolate Cake",
      price: "500.00",
      href: "#",
      imageSrc: PuddingChocolateCake,
    },
    {
      name: "Chocolate Mousse Cake",
      price: "500.00",
      href: "#",
      imageSrc: ChocolateMousseCake,
    },
    {
      name: "Pudding Chocolate Cake",
      price: "500.00",
      href: "#",
      imageSrc: PuddingChocolateCake,
    },
    {
      name: "ORIGINAL MILO",
      price: "500.00",
      href: "#",
      imageSrc: ORIGINALMILO,
    },
    
    {
      name: "Pudding Chocolate Cake",
      price: "500.00",
      href: "#",
      imageSrc: PuddingChocolateCake,
    },
    {
      name: "Chocolate Mousse Cake",
      price: "500.00",
      href: "#",
      imageSrc: ChocolateMousseCake,
    },
  ];

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Birthday Cake", href: "#", noProduct: "3" },
    { name: "Cake", href: "#", noProduct: "13" },
    { name: "Catering", href: "#", noProduct: "4" },
    { name: "Cheesecake", href: "#", noProduct: "2" },
    { name: "Cookie", href: "#", noProduct: "1" },
    { name: "Pastry", href: "#", noProduct: "3" },
    { name: "Sauce", href: "#", noProduct: "1" },
    { name: "Waffle", href: "#", noProduct: "2" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="bg-white py-5 lg:py-16">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4  ">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div>
                  <div className="border-b border-[#E1E8ED] pb-10 hidden lg:block">
                    <label
                      htmlFor="Search"
                      className="block text-base font-medium text-gray-700"
                    >
                      Search
                    </label>
                    <div className="relative mt-1 rounded-lg shadow-sm bg-[#ECECEC]">
                      <input
                        type="text"
                        name="Search"
                        id="Search"
                        className="block w-full text-base rounded-lg bg-[#ECECEC] h-[40px] px-5 border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Search products…"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <img src={IconRight} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-10  border-[#E1E8ED] hidden lg:block">
                    <form className="">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="space-y-2 border-b border-gray-200 pb-6 text-base font-medium text-[#8A8989]"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a
                              className="text-[#8A8989] text-base font-normal"
                              href={category.href}
                            >
                              {category.name}
                            </a>
                            <span> ({category.noProduct})</span>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>
                  
                  <div className="pt-5 border-b border-[#E1E8ED] pb-10 hidden lg:block">
                    
                    <h3 className="text-[18px] font-bold leading-[27px]">
                      กรองตามราคา
                    </h3>
                    <input
                      type="range"
                      class="w-full h-1 mb-6 bg-[#D5828B] rangeInput rounded-lg appearance-none cursor-pointer range-sm"
                    />
                    <div className="mt-5 flex justify-between items-center">
                      <p className="text-base font-normal text-[#8A8989]">
                        Price: ฿280 — ฿900
                      </p>
                      <button className="text-base font-medium bg-[#D5828B] rounded-md px-6 py-3 text-white">
                        Filter
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product gridd */}
                <div className="lg:col-span-3">
                  {/* Replace with your content */}
                  <div className="flex sm:items-baseline flex-col sm:flex-row items-center justify-between mb-10">
                    <h3 className="text-[#68825B] font-bold text-sm">
                      SHOWING ALL 3 RESULTS
                    </h3>
                    <div className="flex items-center">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div className="sm:border border-solid border-[#68825B] rrounded-lg sm:px-[10px] lg:px-5 py-1">
                          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-[#68825B] hover:text-gray-900">
                            Default Sorting
                            <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {sortOptions.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <a
                                      href={option.href}
                                      className={classNames(
                                        option.current
                                          ? "font-medium text-[#68825B]"
                                          : "text-[#68825B]",
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {option.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                      >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                  <div className="mt-3 grid grid-cols-1 place-items-center sm:place-items-start gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-8 lg:gap-x-4">
                    {products.map((product) => (
                      <div key={product.id} className="group relative">
                        <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-64">
                          <img
                            src={product.imageSrc}
                            className="h-[230px] w-[230px] rounded-[20px] object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-4 text-[21px] font-semibold text-[#3c0603]">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-2 text-base font-medium text-[#d5828b]">
                          {product.price}
                        </p>
                      </div>
                    ))}
                    </div>
                    <div className="text-center space-x-5 mt-20">
          <span className="text-[#D5828B]">1</span><span>2</span>
        </div>
                  </div>

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
        
      </div>
    </>
  );
}

export default LaveenaShop;
