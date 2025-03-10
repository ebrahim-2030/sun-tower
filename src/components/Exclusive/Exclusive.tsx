import { TbBed } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiBathtubLight } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Type for arrow components props
interface ArrowProps {
  onClick: () => void;
}

// Custom Next Arrow Component
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/30 backdrop-blur-lg px-3 lg:px-6 py-3 p-2 rounded-full shadow-md cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className="text-white" />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white/30 backdrop-blur-lg px-3 lg:px-6 py-3 p-2 rounded-full shadow-md z-10 cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowLeft className="text-white" />
    </div>
  );
};

// Data objects for properties
const properties = [
  {
    id: 1,
    image: "src/assets/images/exclusive1.png",
    title: "Villa One Hyde Park",
    location: "2050 Bloomingdale Ave",
    price: "$120,000",
    bedrooms: 4,
    bathrooms: 2,
    area: 555,
  },
  {
    id: 2,
    image: "src/assets/images/exclusive4 (2).png",
    title: "Luxury Apartment",
    location: "1234 Downtown St",
    price: "$150,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 750,
  },
  {
    id: 3,
    image: "src/assets/images/exclusive3.png",
    title: "Modern House",
    location: "5678 Uptown Ave",
    price: "$200,000",
    bedrooms: 5,
    bathrooms: 3,
    area: 1200,
  },
];

const Exclusive: React.FC = () => {
  // Slider settings (type assertion)
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  } as any; // Type assertion to 'any'

  // Slider settings for multiple images
  const setting2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  } as any; // Type assertion to 'any'

  return (
    <>
      <div className="text-center space-y-5 p-5">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Exclusive Properties
        </h1>
        <p className="text-xs md:text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          eius?
        </p>
      </div>

      {/* images */}
      <div className="grid grid-cols-1 p-6 gap-2 md:grid-cols-4 md:gap-2 md:gap-x-3 md:gap-y-0 md:p-10">
        {/* image one */}
        <div className="rounded-xl w-full relative overflow-hidden md:col-span-2 md:row-span-2">
          <Slider {...settings}>
            {properties.map((property) => (
              <div
                key={property.id}
                className="rounded-xl h-[400px] md:h-[400px] lg:h-[610px] relative"
              >
                <img
                  src={property.image}
                  className="h-full w-full rounded-2xl object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl"></div>
                {/* text and icons for every image */}
                <div className="absolute bottom-6 md:bottom-10 text-white space-y-2 left-10">
                  <div className="flex flex-col gap-0 space-y-3">
                    <h1 className="text-white text-md md:text-lg lg:text-2xl font-semibold">
                      {property.title}
                    </h1>
                    <p className="text-xs flex font-semibold md:text-sm lg:text-md items-center gap-2 text-gray-200">
                      <CiLocationOn className="text-lg md:text-lg" />{" "}
                      {property.location}
                    </p>
                  </div>
                  {/* under icons */}
                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <h2 className="text-sm md:text-md lg:text-lg font-medium">
                        {property.price}
                      </h2>
                    </div>
                    <div className="text-xs flex md:flex-row md:text-sm justify-between items-center">
                      <p className="flex items-center gap-3 px-3 border-r-2">
                        <TbBed size={18} />
                        {property.bedrooms}
                      </p>
                      <p className="flex items-center gap-3 border-r-2 px-3">
                        <PiBathtubLight size={18} />
                        {property.bathrooms}
                      </p>
                      <p className="flex items-center gap-3 px-3">
                        <TfiWallet size={18} />
                        {property.area}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slider for multiple images */}
        <div className="w-full md:col-span-2 row-span-1 rounded-xl overflow-hidden relative">
          <Slider {...setting2}>
            {properties.map((property) => (
              // loop for details of every image
              <div
                key={property.id}
                className="rounded-xl overflow-hidden relative"
              >
                <img
                  className="w-full h-80 md:h-52 lg:w-[600px] rounded-xl lg:h-[320px] xl:w-[800px]"
                  src={property.image}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="rounded-xl">
          <img
            className="w-full h-72 md:h-44 lg:h-[283px]"
            src={properties[2].image}
          />
        </div>

        {/* Card four */}
        <div className="h-48 w-full md:h-44 p-3 bg-gray-800 rounded-xl text-white lg:p-10 lg:h-[283px] space-y-3">
          <p className="text-3xl md:text-xl lg:text-4xl font-medium">280+</p>
          <p className="md:text-xs lg:text-sm font-semibold text-gray-200">
            Properties
          </p>
          <p className="md:text-xs lg:text-sm font-semibold text-gray-200">
            Explore our wide variety of properties to find your dream home today
          </p>
          <div className="flex justify-center items-center relative">
            <IoIosArrowRoundForward className="absolute h-6 w-6 right-0 -top-3 lg:right-0 lg:top-5 bg-white lg:w-8 lg:h-8 rounded-full text-gray-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
