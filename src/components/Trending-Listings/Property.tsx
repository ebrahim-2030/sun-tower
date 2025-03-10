import { FaStar, FaBath } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { TfiRulerAlt } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { PiWhatsappLogo } from "react-icons/pi";
import React from "react";
import Slider from "react-slick";

interface cardImg {
  id: number;
  img: string;
}

interface Property {
  id: number;
  img: cardImg[];
  title: string;
  address: string;
  toilets: number;
  Bedrooms: number;
  area: string;
  price: string;
  perDayOrNight: string;
  stars: string;
  category: string;
}

interface ChildProps {
  property: Property;
}
const Property: React.FC<ChildProps> = ({ property }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const phoneNumber = "+93777111129";
  const message = "salam ";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className=" shadow-sm rounded-lg bg-white text-[#222] overflow-hidden">
      <Slider {...settings}>
        {property.img.map((image: any) => (
          <img
            className="h-52 rounded-md md:h-44 "
            key={image.id}
            src={image.img}
            alt=""
          />
        ))}
      </Slider>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">{property.title}</h1>
          <span className="flex items-center justify-center">
            <p>{property.stars}</p>
            <FaStar className="text-yellow-400" />
          </span>
        </div>
        <p className="text-xs py-2 text-[#6B7280] ">{property.address}</p>
        <div className="font-medium flex justify-start items-center gap-2">
          <h1 className="flex justify-center items-center gap-1 text-xs text-[#6B7280]">
            <FaBath /> {property.toilets}
          </h1>
          <h1 className="flex justify-center items-center gap-1 text-xs text-[#6B7280]">
            <MdOutlineBedroomChild /> {property.Bedrooms}
          </h1>
          <h1 className="flex justify-center items-center gap-1 text-xs text-[#6B7280]">
            <TfiRulerAlt /> {property.area}
          </h1>
        </div>
        <div className="flex justify-between items-center pb-3">
          <h1 className="font-medium ">
            {property.price}/
            <span className="font-normal">{property.perDayOrNight}</span>
          </h1>
          <div className="flex justify-center items-center gap-1">
            <a href="tel:+93777111129">
              <button className="flex justify-center items-center  sm:text-xs bg-[#E3AA78] px-3 py-2 text-white rounded-[6px]">
                <IoCallOutline /> Call
              </button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex justify-center items-center gap  sm:text-xs bg-[#E3AA78] px-3 py-2 text-white rounded-[6px]">
                <PiWhatsappLogo />
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
