import React, { useState, useEffect } from "react";
import LaveenaLogo from "../img/Laveena-Logo.png";
import sliderImg1 from "../img/sliderImg1.jpg";
import sliderImg2 from "../img/sliderImg2.jpg";
import sliderImg3 from "../img/sliderImg3.jpg";

sliderImg1;

const Slider = () => {
  const images = [
    {
      bgImage: sliderImg1,
      text: "Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home made ตำรับครัวอเมริกัน พิถีพิถันกับทุกขั้นตอน และด้วยความใส่ใจในความต้องการของลูกค้า Laveena จึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุก ๆ ฤดูกาล",
      logo: LaveenaLogo,
      buttonText: "ติดต่อและสั่งซื้อ",
      buttonlink: "#",
    },
    {
      bgImage: sliderImg2,
      text: "Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home made ตำรับครัวอเมริกัน พิถีพิถันกับทุกขั้นตอน และด้วยความใส่ใจในความต้องการของลูกค้า Laveena จึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุก ๆ ฤดูกาล",
      logo: LaveenaLogo,
      buttonText: "ติดต่อและสั่งซื้อ",
      buttonlink: "#",
    },
    {
      bgImage: sliderImg3,
      text: "Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home made ตำรับครัวอเมริกัน พิถีพิถันกับทุกขั้นตอน และด้วยความใส่ใจในความต้องการของลูกค้า Laveena จึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุก ๆ ฤดูกาล",
      logo: LaveenaLogo,
      buttonText: "ติดต่อและสั่งซื้อ",
      buttonlink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Adjust the autoplay interval in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute text-2xl  text-white ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-2000 ease-in-out`}
          >
            <img
              src={image.bgImage}
              alt={`Image ${index + 1}`}
              className="w-[100vw] h-[850px] object-cover"
            />
            <div className="absolute top-[20%] pl-[8%] sm:w-full">
              <img className="sm:w-auto w-1/2" src={image.logo} />
              <p className="sm:w-[575px] mt-[30px]">{image.text}</p>
              <a
                href="#"
                className="text-xl mt-[80px] px-9 py-3 block w-[200px] h-[52px] bg-[#D58288] text-white text-uppercase rounded-[10px]"
              >
                {image.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
