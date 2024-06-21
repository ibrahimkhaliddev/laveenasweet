import React from "react";
import Slider from "../components/Slider";

import bannerTop1 from "../img/bannerTop1.png";
import bannerTop2 from "../img/bannerTop2.png";
import unitedStates1 from "../img/united-states-1.png";
import unitedStates2 from "../img/united-states-2.png";
import unitedStates3 from "../img/united-states-3.png";
import unitedStates4 from "../img/united-states-4.png";
import AmericanWaffle from "../img/American_Waffle.png";
import BelgiumChocolateCake from "../img/BelgiumFlouelessChocolateCake.png";
import COCONUTPIE1 from "../img/COCONUT-PIE-1.png";
import SanKaYa1 from "../img/San-Ka-Ya_1.png";
import PuddingChocolateCake from "../img/PuddingChocolateCake.jpg";
import ChocolateMousseCake from "../img/ChocolateMousseCake.jpg";
import ORIGINALMILO from "../img/ORIGINALMILO.png";
import BirthdayCake1 from "../img/BirthdayCake1.png";
import BirthdayCake2 from "../img/BirthdayCake2.png";
import BirthdayCake3 from "../img/BirthdayCake3.png";

import blogImg1 from "../img/blogImg1.jpeg";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpeg";

function Home() {
  const products = [
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

  const posts = [
    {
      title: "I AM LAVEENA",
      href: "#",
      category: { name: "Article", href: "#" },
      description:
        "จาก…นักออกแบบบรรจุภัณฑ์ สู่…นักออกแบบขนม สู่…ความฝัน QUEEN OF PANDAN",
      date: "06/20/2022",
      imageUrl: blogImg1,
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "เบลเยี่ยมช็อคโกแล็ตไร้แป้ง",
      href: "#",
      category: { name: "Video", href: "#" },
      description:
        "Belgium Flourless Chocolate Cakeเค้กช็อคโกแล็ต ชื่อ “Flourless Chocolate Cake” หรือเรียกเป็นภาษาฝรั่งเศสว่า “Fondant",
      date: "06/20/2022",
      datetime: "2020-03-10",
      imageUrl: blogImg2,
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "เรื่อง ของ เนย",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description: "B U T T E R “ เนย “ เกิดจากการเขย่า",
      date: "06/20/2022",
      imageUrl: blogImg3,
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <>
      <div className="w-full relative block h-[850px]">
        <Slider />
      </div>

      <div className="sm:flex my-20 justify-center lg:max-w-[1290px] mx-auto items-center flex-wrap gap-y-7  px-[20px]">
        <div className="lg:w-1/2">
          <img className="rounded-2xl" src={bannerTop1} alt="" />
        </div>
        <div className="lg:w-1/2 sm:pl-[120px] sm:pr-[20px]">
          <h2 className="lg:text-[48px] sm:text-[32px] mt-[20px] text-[35px] font-normal leading-[48px] text-black fontCopperplate">
            A Perfect Delicious From Taphanhin
          </h2>
          <p
            className="text-[20px] mt-5 font-normal leading-[30px] text-black"
            style={{ fontFamily: "Noto Sans Thai" }}
          >
            ร้าน “Laveena” ปรุงขนมทุกจานด้วยความตั้งใจ คัดสรรเมนูอร่อย มีคุณภาพ
            ปรุงด้วยวัตถุดิบชั้นดี อีกทั้งด้วยบรรยากาศของร้าน
            ที่อบอุ่นเป็นกันเอง ทุกคนจึงรู้สึกดีเหมือน ได้นั่งทานขนมอร่อยๆ
            ในเวลาพักผ่อนได้อย่างสบายใจ
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse my-20 justify-center lg:max-w-[1290px] mx-auto items-center flex-wrap gap-y-7 px-[20px]">
        <div className="lg:w-1/2 sm:pl-[50px] sm:pr-[100px]">
          <h2 className="lg:text-[48px] sm:text-[32px] mt-[20px] text-[35px]   font-normal leading-[48px] text-black fontCopperplate">
            OUR STORY
          </h2>
          <p className="text-[20px] mt-5 font-normal leading-[30px] text-black">
            “Finest American Baking” เป็นคำจำกัดความของ Laveena
            ที่หมายถึงการที่เราเสิร์ฟเมนูที่ได้เรียนมาจากตำรับอเมริกันโดยแท้
            ทุกเมนูล้วนเป็นกรรมวิธีการปรุงแบบอเมริกัน แต่พัฒนา
            ปรับปรุงรสชาติให้ออกมาแบบสไตล์ไทย ในแบบที่ทุกคนคุ้นเคย ไม่ว่าจะเป็น
            เค้ก พาย ขนมปัง และเมนูนางเอกของเรา อเมริกันวาฟเฟิ่ล ที่ Marlene
            ตั้งใจสอนและบันทึกลงบนแผ่นกระดาษด้วยลายมือให้เรากลับมาเป็นของฝากให้กับทุกคนที่บ้าน
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>
        <div className="lg:w-1/2">
          <img className="rounded-2xl" src={bannerTop2} alt="" />
        </div>
      </div>

      {/* <div className="lg:flex my-20 justify-center md:w-[1290px] mx-auto items-center flex-wrap gap-y-7">
        <div className="md:w-1/2">
          <img className="rounded-2xl" src={bannerTop1} alt="" />
        </div>
        <div className="lg:w-1/2 lg:pl-[120px] lg:pr-[20px] px-2">
          <h2 className="text-[48px] font-normal lg:mt-0 mt-5 leading-[48px] text-black fontCopperplate">
            FINEST AMERICAN BAKING
          </h2>
          <p
            className="text-[20px] mt-5 font-normal leading-[30px] text-black"
            style={{ fontFamily: "Noto Sans Thai" }}
          >
            “Laveena” ปรุงขนมทุกจานด้วยความตั้งใจ คัดสรรเมนูอร่อย มีคุณภาพ
            ปรุงด้วยวัตถุดิบชั้นดี อีกทั้งด้วยบรรยากาศของร้าน
            ที่อบอุ่นเป็นกันเอง ทุกคนจึงรู้สึกดีเหมือนได้นั่งทานขนมอร่อยๆ
            ในเวลาพักผ่อนได้อย่างสบายใจ
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>

        <div className="sm:w-1/2 sm:pl-[80px] sm:pr-[100px] sm:mt-0 mt-10 px-2">
          <h2 className="text-[48px] font-normal leading-[48px] text-black fontCopperplate">
            OUR STORY
          </h2>
          <p className="text-[20px] mt-5 font-normal leading-[30px] text-black">
            “Finest American Baking” เป็นคำจำกัดความของ Laveena
            ที่หมายถึงการที่เราเสิร์ฟเมนูที่ได้เรียนมาจากตำรับอเมริกันโดยแท้
            ทุกเมนูล้วนเป็นกรรมวิธีการปรุงแบบอเมริกัน แต่พัฒนา
            ปรับปรุงรสชาติให้ออกมาแบบสไตล์ไทย ในแบบที่ทุกคนคุ้นเคย ไม่ว่าจะเป็น
            เค้ก พาย ขนมปัง และเมนูนางเอกของเรา อเมริกันวาฟเฟิ่ล ที่ Marlene
            ตั้งใจสอนและบันทึกลงบนแผ่นกระดาษด้วยลายมือให้เรากลับมาเป็นของฝากให้กับทุกคนที่บ้าน
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-5">
          <img className="rounded-2xl" src={bannerTop2} alt="" />
        </div>
      </div> */}

      <div className="lg:max-w-[1290px] mt-32 mx-auto">
        <h2 className="text-center text-[48px] font-normal leading-[53px] fontCopperplate">
          SIGNATURE MENU
        </h2>
        <div className="mt-10 md:flex md:flex-wrap">
          <div className="bg-[#E7EBDE] md:w-1/2  lg:w-1/4 text-center px-8 py-14">
            <img
              className="w-[34px] h-[34px] mx-auto"
              src={unitedStates1}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              อเมริกันวาฟเฟิล
            </p>
            <h3 className="mt-5 text-[32px] min-h-[150px] lg:min-h-[300px] leading-[46px] font-bold font-sans">
              AMERICAN WAFFLE
            </h3>
            <img
              src={AmericanWaffle}
              className="md:w-[251px] mx-auto h-[210px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[150px] lg:min-h-[200px] text-black mt-5">
              89.-
            </h4>

            <a
              href="#"
              className="uppercase inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>

          <div className="bg-[#FDFAF6] pb-16 md:w-1/2 py-14  lg:w-1/4 text-center px-8">
            <img
              className="w-[34px] h-[34px] mx-auto"
              src={unitedStates2}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              เบลเยี่ยมช็อคไร้แป้ง
            </p>
            <h3 className="mt-5 text-[32px] min-h-[150px] lg:min-h-[300px] leading-[46px] font-bold font-sans">
              BELGIUM FLOURLESS CHOCOLATE CAKE
            </h3>
            <img
              src={BelgiumChocolateCake}
              className="md:w-[251px] mx-auto h-[210px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[150px] lg:min-h-[200px] text-black mt-5">
              149.-
            </h4>

            <a
              href="#"
              className="uppercase inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
          <div className="bg-[#E7EBDE] md:w-1/2 py-14  lg:w-1/4 text-center px-8 mt-0 sm:mt-8 lg:mt-0">
            <img
              className="w-[34px] h-[34px] mx-auto"
              src={unitedStates3}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              พายฝรั่งเศสไส้มะพร้าวอ่อน
            </p>
            <h3 className="mt-5 text-[32px] min-h-[150px] lg:min-h-[300px] leading-[46px] font-bold font-sans">
              COCONUT FRENCH PIE
            </h3>

            <img
              src={COCONUTPIE1}
              className="md:w-[251px] mx-auto max-h-[210px] object-cover"
              alt=""
            />

            <h4 className="text-[48px] leading-[48px] font-bold min-h-[150px] lg:min-h-[200px] text-black mt-5">
              149.-
            </h4>

            <a
              href="#"
              className="uppercase inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
          <div className="bg-[#FDFAF6] md:w-1/2 py-14  lg:w-1/4 text-center px-8 mt-0 sm:mt-8 lg:mt-0">
            <img
              className="w-[34px] h-[34px] mx-auto"
              src={unitedStates4}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              เค้กสังขยา
            </p>
            <h3 className="mt-5 text-[32px] min-h-[150px] lg:min-h-[300px] leading-[46px] font-bold font-sans">
              SAN KA YA
            </h3>

            <img
              src={SanKaYa1}
              className="md:w-[251px] mx-auto h-[210px] object-cover"
              alt=""
            />

            <h4 className="text-[48px] leading-[48px] font-bold min-h-[150px] lg:min-h-[200px] text-black mt-5">
              199.-
            </h4>

            <a
              href="#"
              className="uppercase inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[1100px] lg:px-8">
          <div className="">
            <h2 className="text-center text-[48px] font-normal leading-[53px] fontCopperplate">
              BEST SELLER
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 md:grid-cols-2 md:gap-y-0 lg:gap-x-4 sm:mt-[40px] lg:mt-16">
            {products.map((product) => (
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
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-2 text-base font-medium text-[#d5828b]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-sm text-center">
            <a
              href="#"
              className="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              VIEW ALL MENU
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#D5828B] py-[60px]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-[48px] font-normal text-white leading-[53px] fontCopperplate">
            BIRTHDAY CAKE
          </h2>
          <p className="text-[20px] leading-[30px] text-white text-center mt-[40px] md:px-[150px]">
            Birthday Fresh cream cake from Laveena Cake Box is sure to make
            their birthday even more special.
          </p>
          <div className="sm:flex justify-between items-center mt-[60px]">
            <img
              src={BirthdayCake1}
              className="w-[270px] h-[auto] mx-auto object-cover"
              alt=""
            />
            <img
              src={BirthdayCake2}
              className="w-[270px] h-[auto] mx-auto object-cover"
              alt=""
            />
            <img
              src={BirthdayCake3}
              className="w-[270px] h-[auto] mx-auto object-cover"
              alt=""
            />
          </div>

          <div className="mt-[50px] text-sm text-center">
            <a
              href="#"
              className="inline-block text-xl font-normal px-7 py-4 text-[#D58288] bg-white text-uppercase rounded-[10px] transition duration-200"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>

      <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-[48px] font-normal leading-[53px] fontCopperplate">
              Blogs
            </h2>
          </div>
          <div className="mx-auto  grid gap-6 md:grid-cols-2 lg:max-w-[1120px] lg:grid-cols-3 mt-[40px]">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-full object-cover rounded-t-[20px] rounded-tr-[20px]"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white pt-5">
                  <div className="flex-1">
                    <a href={post.href} className="mt-2 block">
                      <p className="text-[28px] leading-[46px] font-bold text-[#3c0603]">
                        {post.title}
                      </p>
                      <p className="text-[18px] leading-[23px] font-normal text-[#620d08] mt-2">
                        <a href={post.href}>{post.date}</a>
                      </p>
                      <p className="mt-3 text-xl text-black">
                        {post.description}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full sm:flex">
        <div className="sm:w-1/2 bg-[#68825B]">
          <div className="pt-[11%] pr-[0%] pb-[10%] pl-[20%]">
            <div className=" elementor-widget-wrap elementor-element-populated p-4">
              <div
                className="elementor-element elementor-element-30af089 elementor-widget elementor-widget-heading"
                data-id="30af089"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="text-[48px] font-normal text-white leading-[53px] fontCopperplate">
                    Branch
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5ef2c94 elementor-widget elementor-widget-text-editor mt-4"
                data-id="5ef2c94"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p className="text-white text-[24px] leading-[30px] font-medium">
                    Laveena Taphanhin
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    08:00 – 17:30 Everyday
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    Tel : 062.826.4941
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    <a
                      href="https://goo.gl/maps/b6fkQUFZuMYkgPxGA"
                      className="underline"
                    >
                      GET DIRECTION
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className=" elementor-widget-wrap elementor-element-populated p-4">
              <div
                className="elementor-element elementor-element-5ef2c94 elementor-widget elementor-widget-text-editor mt-4"
                data-id="5ef2c94"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p className="text-white text-[24px] leading-[30px] font-medium">
                    Laveena Meung Pichit
                  </p>
                  <p className="text-white text-[16px] leading-[30px] font-medium">
                    08:00 – 17:30 Everyday
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    Tel : 062.826.4941
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    <a
                      href="https://goo.gl/maps/zEaqd9JVD7Mj3jAEA"
                      className="underline"
                    >
                      GET DIRECTION
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 HomeMapSec"></div>
      </div>
    </>
  );
}

export default Home;
