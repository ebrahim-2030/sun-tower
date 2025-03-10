import heroImg from "../../assets/images/hero-img.png";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchModal from "./SearchModal";
import "./WhatsAppAnimation.css";

const Hero: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["All", "Apartments", "Houses"];

  const handleClick = (cat: any) => {
    setCurrentCategory(cat);
    setIsOpen(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000a",
        backgroundBlendMode: "overlay",
      }}
      className="min-h-screen px-2 overflow-hidden w-full flex justify-center text-white pb-14"
    >
      <div className="flex flex-col items-center mt-48 md:mt-64">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl w-96 md:w-full text-center font-medium">
            Find Your Perfect Home
          </h1>
          <p className="mt-3 md:mt-5 w-[440px] text-center font-medium md:font-normal opacity-70 text-[12px] md:text-[16px]">
            Explore a wide range of properties for sale and rent in Kabul, from
            modern apartments to spacious family homes.
          </p>
        </div>
        <div className="flex items-center mt-4 bg-white text-[#444] rounded-full overflow-hidden">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleClick(cat)}
              className={`py-4 px-6 md:px-10 border-r text-[#D98A46] border-[#D98A4688] ${
                cat === currentCategory
                  ? "text-white bg-[#D98A46] active:bg-[#D98A46] active:text-white"
                  : ""
              } `}
            >
              {cat}
            </button>
          ))}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="bg-[#D98A46]  text-white mr-2 ml-4 h-10 w-10 flex justify-center items-center rounded-full"
            >
              <LuSearch />
            </button>
          </div>
        </div>
        <div>
          <p className="mt-4 text-center opacity-70 font-medium md:font-normal text-[12px] md:text-[16px]">
            What are you looking for?
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <SearchModal
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            categories={categories}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
