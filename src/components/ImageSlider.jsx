import React, { useState } from "react";
import productDetail1 from "../img/productDetail1.jpeg";
import productDetail2 from "../img/productDetail2.jpeg";
import productDetail3 from "../img/productDetail3.jpeg";
import productDetail4 from "../img/productDetail4.jpeg";

export default function ImageSlider() {
  const images = [
    productDetail1,
    productDetail2,
    productDetail3,
    productDetail4,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-5">
      <div className="relative lg:max-h-[620px]">
        <img
          src={images[currentSlide]}
          alt="..."
          className="w-full lg:max-h-[600px] object-cover rounded"
        />
      </div>
      <div className="mt-2 flex justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`mx-2 w-[100px] h-[100px] relative focus:outline-none ${
              currentSlide === index ? "border-2 border-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
