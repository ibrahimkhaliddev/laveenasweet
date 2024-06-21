import React from "react";
import MapIcon from "../img/MapIcon.svg";
import Mailicon from "../img/Mailicon.svg";
import TimeIcon from "../img/TimeIcon.svg";
import PhoneIcon from "../img/PhoneIcon.svg";

function ContactUs() {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 w-full bg-[#D5828B]">
          <div className="pt-[11%] pr-[0%] pb-[10%] pl-[20%]">
            <div className=" laveena-widget-wrap laveena-element-populated p-4">
              <div className="laveena-element laveena-element-30af089 laveena-widget laveena-widget-heading">
                <div className="laveena-widget-container">
                  <h2 className="text-[48px] font-normal text-white leading-[53px] fontCopperplate">
                    Branch
                  </h2>
                </div>
              </div>
              <div
                className="mt-4"
              >
                <div className="laveena-widget-container">
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
            <div className=" laveena-widget-wrap laveena-element-populated p-4">
              <div className="laveena-element laveena-element-5ef2c94 laveena-widget laveena-widget-text-editor mt-4">
                <div className="laveena-widget-container">
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
        <div className="md:w-1/2 w-full min-h-[310px] HomeMapSec"></div>
      </div>

      <div className="flex justify-between gap-8 max-w-[1250px] lg:flex-nowrap flex-wrap mx-[50px] md:mx-5 lg:mx-auto mt-[50px] sm:mt-[80px] lg:mt-[120px]">
        <div className="w-full md:w-[47%] lg:w-1/4  bg-[#E7EBDE] rounded-[20px] py-12 text-center space-y-10">
          <img src={MapIcon} className="mx-auto w-[35px] h-[35px]" />
          <h3 className="text-2xl fontCopperplate">
            Our <br />
            Location
          </h3>
          <p>
            <a
              href="https://goo.gl/maps/b6fkQUFZuMYkgPxGA"
              className="text-base"
            >
              GET DIRECTION
            </a>
          </p>
        </div>
        <div className="w-full md:w-[47%] lg:w-1/4 bg-[#FDFAF6] rounded-[20px] py-10 text-center space-y-10">
          <img src={Mailicon} className="mx-auto w-[35px] h-[35px]" />
          <h3 className="text-2xl fontCopperplate">
            EMAIL <br />
            ADDRESS
          </h3>
          <p>
            <a href="mailto:regallypink@gmail.com" className="text-base">
              regallypink@gmail.com
            </a>
          </p>
        </div>
        <div className="w-full md:w-[47%] lg:w-1/4 bg-[#E7EBDE] rounded-[20px] py-12 text-center space-y-10">
          <img src={TimeIcon} className="mx-auto w-[35px] h-[35px]" />
          <h3 className="text-2xl fontCopperplate">
            OPEN <br />
            HOUSE
          </h3>
          <p>
            Monday - Friday, 09.00 - 21.00
            <br />
            Saturday - Sunday, 09.00 - 19.00
          </p>
        </div>
        <div className="w-full  md:w-[47%]  lg:w-1/4 bg-[#FDFAF6] rounded-[20px] py-10 text-center space-y-10">
          <img src={PhoneIcon} className="mx-auto w-[35px] h-[35px]" />
          <h3 className="text-2xl fontCopperplate">
            PHONE <br />
            NUMBER
          </h3>
          <p></p>
          <a href="tel:021234567">02-123-4567</a>
          <br />
          <a href="tel:0976543219">097-6543219</a>
        </div>
      </div>

      <div className="max-w-[636px] mx-5 sm:mx-auto mt-[40px] sm:mt-[80px] lg:mt-[130px]">
        <div className="laveena-widget-container">
          <h2 className="text-[36px] sm:text-[48px] font-normal text-[#3c0603] leading-[53px] fontCopperplate">
            We’d love to hear <br />
            from you!
          </h2>
        </div>
        <form action="" >
          <div className="mt-[20px]">
            <label
              htmlFor="email"
              className="block text-[18px] leading-[30px]  text-[#3c0603]              ]"
            >
              First & Last Name (required)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-lg text-[#3C0603] py-[6px] px-[12px] bg-[#ECECEC] h-[40px] border border-gray-300 focus:border-gray-400 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="mt-[20px]">
            <label
              htmlFor="email"
              className="block text-[18px] leading-[30px]  text-[#3c0603]              ]"
            >
              Email Address (required)
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg text-[#3C0603] py-[6px] px-[12px] bg-[#ECECEC] h-[40px] border border-gray-300 focus:border-gray-400 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <label
              htmlFor="email"
              className="block text-[18px] leading-[30px]  text-[#3c0603]"
            >
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block w-full rounded-lg text-[#3C0603] py-[6px] px-[12px] bg-[#ECECEC] h-[40px] border border-gray-300 focus:border-gray-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-6 mt-[20px]">
              <label htmlFor="about" className="block text-[18px] leading-[30px]  text-[#3c0603]">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={7}
                  className="block w-full rounded-lg text-[#3C0603] bg-[#ECECEC] border  border-gray-300 focus:border-gray-400 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="pt-5">
        
          <button
            type="submit"
            className="rounded-md border border-transparent bg-[#D5828B] py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ติดต่อและสั่งซื้อ
          </button>
        
      </div>
        </form>
      </div>


      <div className="w-full mt-[60px] md:mt-[180px]">
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=laveena%20sweet&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near"
        title="laveena sweet"
        aria-label="laveena sweet"
        className="w-full h-64 md:h-[600px]"
      ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
