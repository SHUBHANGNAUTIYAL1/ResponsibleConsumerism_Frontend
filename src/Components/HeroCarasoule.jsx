import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeroCarasoule() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next-arrow bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer text-white`}
        style={{ ...style, right: '10px', zIndex: 1 }}
        onClick={onClick}
      >
        &rarr;
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        
      <div
        className={`${className}  bg-black rounded-full bg-opacity-50  flex items-center justify-center  text-white`}
        style={{ ...style, left: '10px', zIndex: 1 }}
        onClick={onClick}
      >
        &larr;
      </div>
      

    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  };

  return (
    <div className="w-full flex justify-center p-5 relative">
      <Slider {...settings} className="w-full">
      <div className="h-[400px] flex items-center justify-center ">
          <img src="https://static.vecteezy.com/system/resources/previews/002/453/548/large_2x/sale-discount-banner-template-promotion-illustration-free-vector.jpg" alt="Agricultural Item 1" className="w-full h-full object-fill" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src="https://static.vecteezy.com/system/resources/previews/002/453/533/non_2x/big-sale-discount-banner-template-promotion-illustration-free-vector.jpg" alt="Agricultural Item 2" className="w-full h-full object-fill" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <img src="https://img.freepik.com/premium-vector/sale-banner-template-background_157027-666.jpg" alt="Agricultural Item 3" className="w-full h-full object-fill" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroCarasoule;
