import React from "react";
import AboutUsHeaderBgImg from "../img/about-us-cake-1.jpg";
import bannerTop1 from "../img/bannerTop1.png";
import bannerTop2 from "../img/bannerTop2.png";
import TimeLineImg1 from "../img/TimeLineImg1.png";
import TimeLineImg2 from "../img/TimeLineImg2.png";
import TimeLineImg3 from "../img/TimeLineImg3.png";
import TimeLineImg4 from "../img/TimeLineImg4.png";

function AboutUs() {
  return (
    <>
      <div className="relative bg-gray-900 lg:h-[350px]">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden ">
          <img
            src={AboutUsHeaderBgImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        /> */}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-[100px] lg:px-0">
          <h1 className="text-4xl  text-white lg:text-5xl fontCopperplate">
            About us
          </h1>
          <p className="mt-4 text-xl text-white">
            Laveena เบเกอรี่ตำรับอเมริกัน รสชาติสไตล์ไทย
            แต่ละเมนูมีเรื่องราวจากหลายแหล่งที่มา
            พร้อมด้วยวัตถุดิบที่คัดสรรมาอย่างพิถีพิถัน ตามแบบฉบับ HOME MADE
            โดยเรายืนยันที่จะไม่เติมสารแต่งรสเกินจำเป็น… เพื่อให้ Laveena
            เป็นรสเบเกอรี่ที่มีความเป็นธรรมชาติ คุ้นลิ้นคนไทยโดยแท้
          </p>
        </div>
      </div>

      <div className="sm:flex my-20 justify-center lg:max-w-[1290px] mx-auto items-center flex-wrap gap-y-7  px-[20px]">
        <div className="lg:w-1/2">
          <img className="rounded-2xl" src={bannerTop1} alt="" />
        </div>
        <div className="lg:w-1/2 sm:pl-[60px]  sm:pr-[20px]">
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

      <div className="laveena-widget-container text-center mt-[200px] hidden sm:block">
        <h2 className="text-[48px] font-normal text-black leading-[53px] fontCopperplate">
          Our story
        </h2>
      </div>

      <div className="max-w-[980px] mx-auto mt-[100px] hidden md:block lg:mx-auto md:mx-[20px]">
        <div className="qodef-shortcode qodef-m qodef-qi-timeline qodef-timeline--vertical qodef-timeline-layout--vertical-separated qodef-line--outside qodef-point--diamond qodef-qi--has-appear qodef-reverse-padding qodef-qi--appeared">
          <div className="qodef-e qodef-e-item  elementor-repeater-item-fac96c6 qodef-obverse">
            <div className="qodef-e-line-holder">
              <span className="qodef-e-line"></span>
            </div>
            <div className="qodef-e-item-inner">
              <div className="qodef-e-point-holder">
                <div className="qodef-e-point"></div>
              </div>
              <div className="qodef-e-side-holder">
                <div className="qodef-e-image">
                  <img
                    loading="lazy"
                    width="416"
                    height="477"
                    src={TimeLineImg1}
                    className="attachment-full size-full"
                  />
                </div>
              </div>
              <div className="qodef-e-content-holder">
                <div className="qodef-e-date">2530 </div>
                <h4 className="qodef-e-title fontCopperplate">BEGINNING OF OUR JOURNEY </h4>
                <p className="qodef-e-text">
                  Laveena (ลา-วี-น่า) ชื่อเรียกจากเพื่อนชาวอเมริกัน
                  ถูกนำมาตั้งเป็นชื่อแบรนด์ขนมคุณภาพ ที่ปรุงด้วยความพิถีพิถัน
                  และใช้วัตถุดิบพรีเมี่ยมที่ถูกคัดสรรมาอย่างดี
                  เพื่อเป็นสัญลักษณ์ที่สื่อถึงที่มาของแบรนด์
                  ที่เจ้าของแบรนด์ได้เรียนรู้สูตรและวิธีการทำเบเกอรี่จากการได้เคยใช้ชีวิตอยู่ที่อเมริกา
                  และเป็นสูตรลับจากตำรับครัวอเมริกันโดยแท้
                </p>
              </div>
            </div>
          </div>
          <div className="qodef-e qodef-e-item  elementor-repeater-item-f588a7c qodef-reverse">
            <div className="qodef-e-line-holder">
              <span className="qodef-e-line"></span>
            </div>
            <div className="qodef-e-item-inner">
              <div className="qodef-e-point-holder">
                <div className="qodef-e-point"></div>
              </div>
              <div className="qodef-e-side-holder">
                <div className="qodef-e-image">
                  <img
                    loading="lazy"
                    width="417"
                    height="476"
                    src={TimeLineImg2}
                    className="attachment-full size-full"
                  />
                </div>
              </div>
              <div className="qodef-e-content-holder">
                <div className="qodef-e-date">2009 </div>
                <h4 className="qodef-e-title">DELICIOUS FORM </h4>
                <p className="qodef-e-text">
                  ด้วยความมุ่งมั่นตั้งใจของเพื่อนรักสองคน คุณกุ้งและคุณยุ้ย
                  ผู้ชื่นชอบการเดินทางและการทำเบเกอรี่เป็นชีวิตจิตใจ
                  และปรารถนาจะส่งมอบความอร่อย
                  ให้เหมือนกับเป็นของฝากคนที่เรารักหลังจากกลับมาจากการไปใช้ชีวิตอยู่ที่อเมริกา
                  ร้านเบเกอรี่เล็กๆแห่งแรกที่บ้านเกิด อำเภอตะพานหิน
                  จังหวัดพิจิตร จึงได้ถือกำเนิดขึ้น
                </p>
              </div>
            </div>
          </div>
          <div className="qodef-e qodef-e-item  elementor-repeater-item-7273df9 qodef-obverse">
            <div className="qodef-e-line-holder">
              <span className="qodef-e-line"></span>
            </div>
            <div className="qodef-e-item-inner">
              <div className="qodef-e-point-holder">
                <div className="qodef-e-point"></div>
              </div>
              <div className="qodef-e-side-holder">
                <div className="qodef-e-image">
                  <img
                    loading="lazy"
                    width="416"
                    height="477"
                    src={TimeLineImg3}
                  />
                </div>
              </div>
              <div className="qodef-e-content-holder">
                <div className="qodef-e-date">2540 </div>
                <h4 className="qodef-e-title">AMERICAN HEART MADE </h4>
                <p className="qodef-e-text">
                  Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ
                  home made พิถีพิถันได้ทุกขั้นตอน
                  ซึ่งสูตรของทางร้านได้ปรับปรุงให้เข้ากับรสที่คุ้นเคยลิ้นของคนไทย
                  และด้วยความใส่ใจในความต้องการของลูกค้า
                  เราจึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุกๆฤดูกาล
                </p>
              </div>
            </div>
          </div>
          <div className="qodef-e qodef-e-item  elementor-repeater-item-884cac5 qodef-reverse">
            <div className="qodef-e-line-holder">
              <span className="qodef-e-line"></span>
            </div>
            <div className="qodef-e-item-inner">
              <div className="qodef-e-point-holder">
                <div className="qodef-e-point"></div>
              </div>
              <div className="qodef-e-side-holder">
                <div className="qodef-e-image">
                  <img
                    loading="lazy"
                    width="417"
                    height="476"
                    src={TimeLineImg4}
                  />
                </div>
              </div>
              <div className="qodef-e-content-holder">
                <div className="qodef-e-date">2545 </div>
                <h4 className="qodef-e-title">MORE THAN RECIPES </h4>
                <p className="qodef-e-text">
                  Laveena เบเกอรี่ที่หวานน้อย หอม เนียนนุ่มลิ้นตั้งแต่คำแรก
                  ได้จากการพัฒนา ปรับปรุงสูตรจนลงตัว
                  โดยใช้ตำรับเบเกอรี่ดั้งเดิมของครัวอเมริกัน
                  ตั้งแต่สมัยที่คุณกุ้งและคุณยุ้ยได้ใช้ชีวิตช่วงหนึ่ง ณ
                  ประเทศอเมริกา
                  และคุณยุ้ยยังกลับมาพัฒนาและได้ศึกษาให้มีความเชี่ยวชาญเพิ่มเติมจากสถาบัน
                  Le Gordon Bleu ซึ่งก็ยังมุ่งมั่นพัฒนา
                  และผลิตเมนูเบเกอรี่ที่ทันสมัย หลากหลาย
                  แต่ยังคงมีรสชาติที่คุ้นเคยสำหรับคนไทยอย่างในปัจจุบัน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[40px] sm:hidden block">
        <h2 class="text-[32px] text-center">Our story</h2>
        <p className="mt-5 text-center">
          ยูวีละตินแหม็บกิมจิ ออสซี่อยุติธรรมสไตรค์เกมส์
          ไฮไลท์ถ่ายทำฟีดโบตั๋นไฮไลท์ถ่าย เยอร์บีร่า ไลนสไตรค์เกมส์
        </p>
        <div className="mt-6">
          <img src={TimeLineImg1} alt="" />
          <p className="mt-4">
            Laveena (ลา-วี-น่า) ชื่อเรียกจากเพื่อนชาวอเมริกัน
            ถูกนำมาตั้งเป็นชื่อแบรนด์ขนมคุณภาพ ที่ปรุงด้วยความพิถีพิถัน
            และใช้วัตถุดิบพรีเมี่ยมที่ถูกคัดสรรมาอย่างดี
            เพื่อเป็นสัญลักษณ์ที่สื่อถึงที่มาของแบรนด์
            ที่เจ้าของแบรนด์ได้เรียนรู้สูตรและวิธีการทำเบเกอรี่จากการได้เคยใช้ชีวิตอยู่ที่อเมริกา
            และเป็นสูตรลับจากตำรับครัวอเมริกันโดยแท้
          </p>
        </div>
        <div className="mt-6">
          <img src={TimeLineImg2} alt="" />
          <p className="mt-4">
            ด้วยความมุ่งมั่นตั้งใจของเพื่อนรักสองคน คุณกุ้งและคุณยุ้ย
            ผู้ชื่นชอบการเดินทางและการทำเบเกอรี่เป็นชีวิตจิตใจ
            และปรารถนาจะส่งมอบความอร่อย
            ให้เหมือนกับเป็นของฝากคนที่เรารักหลังจากกลับมาจากการไปใช้ชีวิตอยู่ที่อเมริกา
            ร้านเบเกอรี่เล็กๆแห่งแรกที่บ้านเกิด อำเภอตะพานหิน จังหวัดพิจิตร
            จึงได้ถือกำเนิดขึ้น
          </p>
        </div>
        <div className="mt-6">
          <img src={TimeLineImg3} alt="" />
          <p className="mt-4">
            Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home
            made พิถีพิถันได้ทุกขั้นตอน
            ซึ่งสูตรของทางร้านได้ปรับปรุงให้เข้ากับรสที่คุ้นเคยลิ้นของคนไทย
            และด้วยความใส่ใจในความต้องการของลูกค้า เราจึงมีเมนูออกใหม่ในทุกๆปี
            และมีเมนูพิเศษในทุกๆฤดูกาล
          </p>
        </div>
        <div className="mt-6">
          <img src={TimeLineImg4} alt="" />
          <p className="mt-4">
            Laveena เบเกอรี่ที่หวานน้อย หอม เนียนนุ่มลิ้นตั้งแต่คำแรก
            ได้จากการพัฒนา ปรับปรุงสูตรจนลงตัว
            โดยใช้ตำรับเบเกอรี่ดั้งเดิมของครัวอเมริกัน
            ตั้งแต่สมัยที่คุณกุ้งและคุณยุ้ยได้ใช้ชีวิตช่วงหนึ่ง ณ ประเทศอเมริกา
            และคุณยุ้ยยังกลับมาพัฒนาและได้ศึกษาให้มีความเชี่ยวชาญเพิ่มเติมจากสถาบัน
            Le Gordon Bleu ซึ่งก็ยังมุ่งมั่นพัฒนา และผลิตเมนูเบเกอรี่ที่ทันสมัย
            หลากหลาย แต่ยังคงมีรสชาติที่คุ้นเคยสำหรับคนไทยอย่างในปัจจุบัน
          </p>
        </div>
      </div>

      <div className="bg-[#D5828B] text-white hidden lg:block text-center text-[34px] leading-[52px] py-[80px] md:mt-[180px]">
        <div className="elementor-widget-container">
          ขนมทุกชิ้นที่เราปรุงจะส่งต่อ
          <span className="font-bold text-[44px] mx-2">ความสุข</span>
          ให้ทุกคนให้เหมือนกับที่
          <br />
          <span className="font-bold text-[44px]">คนในครอบครัว</span>
          เราได้รับ
          <h2
            class="text-[30px] leading-[36px] mt-1 fontDancingScript"
          >
            Laveena’s TheBaking Room
          </h2>
        </div>
      </div>

      <div className="bg-[#D5828B] text-white text-center block lg:hidden text-[30px] leading-[46px] px-[30px] py-[80px] lg:mt-[180px] mt-[100px]">
        <div className="elementor-widget-container">
          ขนมทุกชิ้นที่เราปรุงจะส่งต่อ
          <span className="font-bold text-[32px] mx-2">ความสุข</span>
          ให้ทุกคนให้เหมือนกับที่
          <span className="font-bold text-[32px]">คนในครอบครัว</span>
          เราได้รับ
          <h2
            class="text-[30px] leading-[32px] fontDancingScript mt-2"
          >
            Laveena’s TheBaking Room
          </h2>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
