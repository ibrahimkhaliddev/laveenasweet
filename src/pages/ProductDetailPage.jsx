import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import COCONUTPIE1 from "../img/COCONUT-PIE-1.png";
import SanKaYa1 from "../img/San-Ka-Ya_1.png";
import BelgiumChocolateCake from "../img/BelgiumFlouelessChocolateCake.png";
import PuddingChocolateCake from "../img/PuddingChocolateCake.jpg";
import ChocolateMousseCake from "../img/ChocolateMousseCake.jpg";
import productDetail1 from "../img/productDetail1.jpeg";
import productDetail2 from "../img/productDetail2.jpeg";
import productDetail3 from "../img/productDetail3.jpeg";
import ORIGINALMILO from "../img/ORIGINALMILO.png";
import ImageSlider from "../components/ImageSlider";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
      date: "July 16, 2023",
      datetime: "2021-07-16",
      author: "John Doe",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};
const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Flats", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Heels", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
              { name: "Accessories", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Tops", href: "#" },
              { name: "Bottoms", href: "#" },
              { name: "Swimwear", href: "#" },
              { name: "Underwear", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Hoodies", href: "#" },
              { name: "Swimsuits", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

const laveenaRelatedPro = [
  {
    id: 1,
    name: "Belgium Flourless Chocolate Cake",
    price: "149.00",
    href: "#",
    imageSrc: BelgiumChocolateCake,
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 1,
    name: "Pudding Chocolate Cake",
    price: "500.00",
    href: "#",
    imageSrc: PuddingChocolateCake,
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 1,
    name: "Chocolate Mousse Cake",
    price: "500.00",
    href: "#",
    imageSrc: ChocolateMousseCake,
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 1,
    name: "ORIGINAL MILO",
    price: "500.00",
    href: "#",
    imageSrc: ORIGINALMILO,
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
];

const product = {
  name: "Classic Cake",
  info: "280.00 – 750.00",
  price: "750.00",
  href: "#",
  desc:"เค้กช็อกโกแลตไร้แป้ง ที่เราได้สูตรลับมาจากเพื่อนชาวเบลเยี่ยม พิเศษตรงความผสมผสานของช็อคโกแล็ตเกรดพรีเมี่ยม 3 ตัวนำเข้าจากเบลเยี่ยมโดยแท้ หวานน้อย เข้มข้น แถมแคลน้อย อร่อยแล้วอ้วนน้อยลงครึ่งนึง",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc: productDetail1,
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: productDetail3,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: productDetail3,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  Flavor: [
    { name: "Vanilla", inStock: true },
    { name: "Chocolate", inStock: true },
    { name: "Coconut", inStock: true },
    { name: "Coffee", inStock: true },
  ],
  sizes: [
    { name: "1 Pound", inStock: true },
    { name: "2 Pound", inStock: true },
    { name: "3 Pound", inStock: true },
  ],
};

const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailPage() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="space-y-4">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center group-hover:opacity-75"
                              />
                              <div className="flex flex-col justify-end">
                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                  <a
                                    href={item.href}
                                    className="font-medium text-gray-900"
                                  >
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                  <p
                                    aria-hidden="true"
                                    className="mt-0.5 text-gray-700 sm:mt-1"
                                  >
                                    Shop now
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((column, columnIdx) => (
                          <div key={columnIdx} className="space-y-10">
                            {column.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto mt--8 lg:mt-16 px-4 pb-10 sm:px-6 sm:pb-10 lg:mx-[100px] lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 flex flex-col productDetailMain">
          <div className="lg:col-span-5 lg:col-start-8 mt-10 lg:mt-0 productDetail order-2">
            <div className="">
              <h1 className="text-[30px] font-bold text-[#3C0603]">
                {product.name}
              </h1>
              <p className="text-[20px] font-bold text-[#D5828B] mt-5">
                {product.info}
              </p>
              <p className="text-[16px] font-normal text-[#383838] mt-5">
                {product.desc}
              </p>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 order-1 productImage">
            <h2 className="sr-only">Images</h2>
            <ImageSlider />

           
          </div>

          <div className="mt-8 lg:col-span-5 productVariations order-3">
            <div>
              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-medium text-[#383838]">
                    Flavor:{" "}
                    <span className="text-[16px] font-semibold text-[#383838]">
                      Coconut
                    </span>
                  </h2>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    {" "}
                    Choose a size{" "}
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-1 sm:grid-cols-6">
                    {product.Flavor.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer focus:outline-none"
                              : "opacity-25 cursor-not-allowed",
                            active
                              ? "ring-2 ring-offset-2 ring-indigo-500"
                              : "",
                            checked
                              ? "border "
                              : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                            "border rounded-md py-1 px-1 flex items-center justify-center text-sm"
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-medium text-[#383838]">
                    Sizes
                  </h2>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    {" "}
                    Choose a size{" "}
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-1 sm:grid-cols-6">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer focus:outline-none"
                              : "opacity-25 cursor-not-allowed",
                            active
                              ? "ring-2 ring-offset-2 ring-indigo-500"
                              : "",
                            checked
                              ? "border "
                              : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                            "border rounded-md py-1 px-1 flex items-center justify-center text-sm font-medium uppercase"
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="flex justify-between items-center mt-8 gap-x-3">
                <div className="custom-number-input w-32">
                  <div className="flex flex-row w-full rounded-lg relative h-[50px] bg-[#ECECEC] border border-[#C4C4C4]">
                    <button
                      onClick={decrement}
                      className="bg-[#ECECEC] text-gray-600 hover:text-gray-700 h-full w-20 rounded-l-lg cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="outline-none focus:outline-none text-center w-full bg-[#ECECEC] font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                      name="custom-input-number"
                      value={value}
                    />
                    <button
                      onClick={increment}
                      className="bg-[#ECECEC] text-gray-600 hover:text-gray-700 h-full w-20 rounded-r-lg cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent hover:bg-[#383838] transition-all duration-200 bg-[#D5828B] py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-16">
          <div className="mx-auto lg:mx-[100px] lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="">
                <Tab.List className="-mb-px justify-center flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected ? "border-black" : "border-transparent",
                        "whitespace-nowrap text-[12px] font-semibold text-[#383838] border-b-2 py-6"
                      )
                    }
                  >
                    ADDITIONAL INFORMATION
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected ? "border-black" : "border-transparent",
                        "whitespace-nowrap text-[12px] font-semibold text-[#383838] border-b-2 py-6"
                      )
                    }
                  >
                    REVIEWS (0)
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="mb-5">
                  <h3 className="text-[20px] font-bold leading-[30px] mb-10 mt-5">
                    Additional information
                  </h3>
                  <div className="sm:flex px-3 py-2">
                    <p className="sm:w-[30%] text-[15px] text-[#383838] font-medium">
                      Flavor
                    </p>
                    <p className="sm:w-[70%] text-[15px] font-noraml text-[#383838]">
                      Vanilla, Chocolate, Coconut, Coffee, Orange, Pandan
                    </p>
                  </div>
                  <div className="bg-[#F8F9FB] sm:flex px-3 py-2">
                    <p className="sm:w-[30%] text-[15px] text-[#383838] font-medium">
                      Size
                    </p>
                    <p className="sm:w-[70%] text-[15px] font-noraml text-[#383838]">
                      1 Pound, 2 Pound, 3 Pound
                    </p>
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  <div className="sm:flex">
                    <div className="sm:w-1/2">
                      <h3 className="text-[20px] font-bold leading-[30px] mb-10 mt-5">
                        Reviews
                      </h3>

                      <div className="pr-5">
                        {reviews.featured.map((review, reviewIdx) => (
                          <div
                            key={review.id}
                            className="flex space-x-4 text-sm text-gray-500"
                          >
                            <div className="flex-none py-10">
                              <img
                                src={review.avatarSrc}
                                alt=""
                                className="h-10 w-10 rounded-full bg-gray-100"
                              />
                            </div>
                            <div
                              className={classNames(
                                reviewIdx === 0
                                  ? ""
                                  : "border-t border-gray-200",
                                "flex-1 py-10"
                              )}
                            >
                              <h3 className="font-medium text-gray-900">
                                {review.author}
                              </h3>
                              <p>
                                <time dateTime={review.datetime}>
                                  {review.date}
                                </time>
                              </p>

                              <div className="mt-4 flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      review.rating > rating
                                        ? "text-yellow-400"
                                        : "text-gray-300",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {review.rating} out of 5 stars
                              </p>

                              <div
                                className="prose prose-sm mt-4 max-w-none text-gray-500"
                                dangerouslySetInnerHTML={{
                                  __html: review.content,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="sm:w-1/2">
                      <h3 className="text-[20px] font-bold leading-[30px] mt-5">
                        Add a review
                      </h3>
                      <p className="mt-5 font-normal text-[13px] text-[#383838]">
                        Your email address will not be published. Required
                        fields are marked{" "}
                        <span className="text-red-600">*</span>
                      </p>
                      <div>
                        <p className="mt-5 font-normal text-[12px] text-[#383838]">
                          YOUR RATING <span className="text-red-500">*</span>
                        </p>
                      </div>
                      <textarea
                        name=""
                        rows="7"
                        className="bg-[#ECECEC] w-full rounded-xl px-4 placeholder:text-[#2c2b2b] text-[#383838] font-normal text-[15px] py-3 mt-5"
                        placeholder="Your Review"
                      ></textarea>
                      <div className="mt-5 sm:flex justify-between gap-x-5">
                        <input
                          type="text"
                          placeholder="Name"
                          className="bg-[#ECECEC] sm:w-1/2 rounded-xl px-4 placeholder:text-[#2c2b2b] text-[#383838] font-normal text-[15px] py-2.5"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="bg-[#ECECEC] sm:w-1/2 rounded-xl px-4 placeholder:text-[#2c2b2b] text-[#383838] font-normal text-[15px] py-2.5"
                        />
                      </div>
                      <div className="flex items-center mt-5">
                        <input type="checkbox" />
                        <p className="ml-3 font-normal text-[13px] text-[#383838]">
                          {" "}
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </p>
                      </div>
                      <button className="bg-[#D5828B] text-[14px] font-medium mt-5 rounded-md px-4 py-2 text-white mb-10">
                        Submit
                      </button>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        <section className="bg-white hidden">
          <div className="mx-auto  py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="">
              <h2 className="text-center text-[48px] font-normal leading-[53px]">
                Related products
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 md:grid-cols-2 md:gap-y-0 lg:gap-x-4 lg:mt-16">
              {laveenaRelatedPro.map((product) => (
                <div
                  key={product.id}
                  className="group relative sm:w-auto w-[250px] mx-auto"
                >
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

                  <p className="mt-2 text-base font-medium text-[#d5828b]">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
