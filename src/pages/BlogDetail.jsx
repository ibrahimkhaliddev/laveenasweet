import React from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import blogImg1 from "../img/blogImg3.jpeg";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpeg";
import featureImg from "../img/blogImg3.jpeg";

function BlogDetail() {
  const pages = [
    { name: "LAVEENA", href: "#", current: false },
    { name: "เรื่อง ของ เนย", href: "#", current: true },
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
    },
    {
      title: "เบลเยี่ยมช็อคโกแล็ตไร้แป้ง",
      href: "#",
      description:
        "Belgium Flourless Chocolate Cakeเค้กช็อคโกแล็ต ชื่อ “Flourless Chocolate Cake” หรือเรียกเป็นภาษาฝรั่งเศสว่า “Fondant",
      date: "06/20/2022",
      imageUrl: blogImg2,
    },
  ];

  return (
    <>
      <div className=" mt-8 lg:mt-20 max-w-[750px] mx-auto">
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-1 text-[12px] leading-[20px] font-semibold text-[#212121]"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <h2 className="text-[30px] leading-[45px] text-center mt-10 lg:mt-5">
          เรื่อง ของ เนย
        </h2>
        <ul className="mt-5 text-center">
          <li className="meta-categories inline-block">
            <a
              href="https://laveenasweet.com/category/laveena/"
              rel="tag"
              className="font-bold text-[#383838]"
            >
              Laveena
            </a>
          </li>
          <li className="meta-date  inline-block" itemprop="datePublished">
            <time className="text-[12px] text-[#212121]">20 Jun 2022</time>
          </li>
        </ul>
        <img
          src={featureImg}
          className="featureImg mx-auto w-[380px] h-[190px] object-cover pt-8"
          alt=""
        />

        <div class="blog-content text-[#383838] mt-14 px-4">
          <p>B U T T E R</p>

          <p>
            “ เนย “ เกิดจากการเขย่า (churning) นม เพื่อแยกไขมันออกมาจากนม
            กระบวนการนี้จะได้ไขมันเนย
            และบัตเตอร์มิลก์ซึ่งจากนั้นจะนำไขมันเนยตัวนี้ไปผ่านกระบวนการในอุณหภูมิต่ำจนแข็งตัวกลายเป็นเนยในแบบที่เราคุ้นเคยกันนั่นเอง
          </p>

          <p>
            โดยทั่วไปแล้วเนยจะทำจากนมวัว แต่ก็จะมีแบบที่ทำจากสัตว์อื่นๆด้วย
            แต่ก็จะให้รสชาติและกลิ่นที่แตกต่างกันไป ซึ่งเนยแท้ หรือ Pure Butter
            นั้นจะต้องมีเปอร์เซ็นของไขมันเนยมากกว่า 80%
          </p>

          <p>
            สำหรับเนย..ที่เราเห็นในท้องตลาดมีหลายราคา และหลายชนิด
            จะแยกกันไปตามเปอร์เซ็นต์ของไขมันเนย ซึ่งถ้ามีต่ำกว่า 80%
            เราจะไม่เรียกว่าเนยแท้แต่เราจะเรียกว่า Butter Blend แทน
            ซึ่งมีส่วนผสมของไขมันพืชเป็นหลัก
            ทั้งนี้ราคาก็จะต่างตรงกับเปอร์เซ็นของไขมันเนย
          </p>

          <p>
            และรสชาติก็มีความแตกต่างกันตามสัดส่วนของไขมันเนยด้วยเช่นกัน
            ไขมันเนยมากย่อมมีความหอม มีความอร่อยเฉพาะตัวมากกว่าเนยผสม Butter
            Blend&nbsp;
          </p>

          <p>ยกตัวอย่างเช่น</p>

          <p>1.เนยอลาวรี่พรีเมี่ยม (กล่องสีขาว)</p>

          <p>
            เป็นเนยแท้ หรือ Pure Butter
            เพราะที่ฉลากแสดงให้เห็นว่ามีเปอร์เซ็นไขมันเนยกว่า 82% 2 กิโลราคา 850
            บาท เฉลี่ยราคากิโลกรัมละ 425 บาท
          </p>

          <p>2.เนยอลาวรี่คอมพาวด์ (กล่องสีน้ำตาลตัวอักษรสีแดง)</p>

          <p>
            เป็นเนยผสม หรือ Butter Blend
            ที่ฉลากจะเห็นเลยว่ามีไขมันพืชเป็นส่วนผสมหลัก มีไขมันเนยอยู่ที่ 35%
            กล่องละ 5 กิโล ราคา 945 บาท เฉลี่ยราคากิโลกรัมละ 189 บาท
          </p>

          <p>3.เนยอลาวรี่ แวลู (กล่องสีน้ำตาลคาดสีแดง)</p>

          <p>
            เป็นเนยผสม หรือ Butter Blend เช่นกัน
            ที่ฉลากมีไขมันพืชเป็นส่วนผสมหลักเช่นกันค่ะ มีไขมันเนยอยู่ที่ 10%
            กล่องนี้ 5 กิโล ราคา 735 บาท เฉลี่ยราคากิโลกรัมละ 147 บาท
          </p>

          <p>
            เราจะใช้เนยแบบไหนก็ได้ในการทำขนม
            สามารถเลือกใช้ได้ตามความเหมาะสมและงบประมาณเลยค่ะ
            แต่จะแนะนำเสมอว่าถ้าทำทานเอง หรือทำให้คนที่เรารักทาน
            เลือกใช้เนยแท้รสชาติจะอร่อยกว่า เหมือนกับที่ Laveena
            เลือกใช้เนยแท้เพื่อส่งต่อความอร่อยให้ทุกคนได้รับเหมือนกับคนในครอบครัวของเรา..
            เรามาอร่อยแบบมีคุณภาพ ไปด้วยกันนะคะ&nbsp;
          </p>
        </div>
      </div>

      <div className="w-full mt-[50px]">
        <div className="relative bg-[#FDFAF6] px-6 pt-8 pb-20 lg:px-8 lg:pt-16 lg:pb-28">
         
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-[35px] font-bold leading-[53px]">
              YOU MAY ALSO LIKE
              </h2>
            </div>
            <div className="mx-auto mt-4 grid max-w-lg gap-6 lg:max-w-[1280px] lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-52 w-full object-cover rounded-t-[8px] rounded-tr-[8px]"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between pt-5">
                    <div className="flex-1">
                      <a href={post.href} className="mt-2 block">
                        <p className="text-[16px]  font-bold text-[#383838]">
                          {post.title}
                        </p>
                        
                        <p className="mt-3 text-sm text-[#3c0603]">
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
      </div>
    </>
  );
}

export default BlogDetail;
