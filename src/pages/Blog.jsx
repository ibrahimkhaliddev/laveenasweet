import React from "react";
import AboutUsHeaderBgImg from "../img/about-us-cake-1.jpg";
import blogImg1 from "../img/blogImg1.jpeg";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpeg";


function Blog() {


    const posts = [
        {
          title: "I AM LAVEENA",
          href: "#",
          category: { name: "Article", href: "#" },
          description:
            "จาก…นักออกแบบบรรจุภัณฑ์ สู่…นักออกแบบขนม สู่…ความฝัน QUEEN OF PANDAN",
          date: "06/20/2022",
          imageUrl:blogImg1,
         
        },
        {
          title: "เบลเยี่ยมช็อคโกแล็ตไร้แป้ง",
          href: "#",
          description:
            "Belgium Flourless Chocolate Cakeเค้กช็อคโกแล็ต ชื่อ “Flourless Chocolate Cake” หรือเรียกเป็นภาษาฝรั่งเศสว่า “Fondant",
          date: "06/20/2022",
          imageUrl: blogImg2,
        },
        {
          title: "เรื่อง ของ เนย",
          href: "#",
          description:"B U T T E R “ เนย “ เกิดจากการเขย่า",
            date: "06/20/2022",
          imageUrl:blogImg3,
        },
      ];
  return (
    <>
      <div className="relative bg-gray-900 lg:h-[350px]">
        {/* Decorative image and overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden "
        >
          <img
            src={AboutUsHeaderBgImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-[100px] lg:px-0">
          <h1 className="text-4xl  text-white lg:text-5xl fontCopperplate">
            BLOGS
          </h1>
          <p className="mt-4 text-xl text-white">
            ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home made
            ตำรับครัวอเมริกัน
            พิถีพิถันกับทุกขั้นตอนและด้วยความใส่ใจในความต้องการของลูกค้า Laveena
            จึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุก ๆ ฤดูกาล
          </p>
          
        </div>
      </div>



      <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          
          <div className="mx-auto mt-12 grid max-w-lg gap-6 lg:max-w-[1280px] lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-[52px] lg:h-64 w-full object-cover rounded-t-[20px] rounded-tr-[20px]"
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
                        <a href={post.href}>
                          {post.date}
                        </a>
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
    </>
  );
}

export default Blog;
