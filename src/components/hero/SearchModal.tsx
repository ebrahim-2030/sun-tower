import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { properties } from "../../data/Data";
import Property from "../Trending-Listings/Property";
import { FaXmark } from "react-icons/fa6";

interface SearchModalProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  categories: string[];
  setIsOpen: (isOpen: boolean) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  currentCategory,
  setCurrentCategory,
  categories,
  setIsOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProperties = properties.filter(
    (property) =>
      (currentCategory === "All" || property.category === currentCategory) &&
      property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 md:pt-32 z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white relative w-[96%]   md:w-[50%]  px-4 py-6 rounded-3xl "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setCurrentCategory(cat)}
                className={`px-3 py-1 rounded-full border text-[#D98A46] border-[#D98A46] ${
                  cat === currentCategory ? "text-white bg-[#D98A46]" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#D98A46] font-bold text-xl -mt-9"
          >
            <FaXmark />
          </button>
        </div>

        <form>
          <div className="p-1 bg-white text-[#222] rounded-full flex items-center border">
            <input
              className="w-full px-3 outline-none placeholder:text-[14px]"
              type="text"
              placeholder="Enter Name, Keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#D98A46] text-white h-10 w-10 flex justify-center items-center rounded-full"
            >
              <LuSearch />
            </button>
          </div>
        </form>

        {filteredProperties.length > 0 ? (
          <div className="h-[360px] overflow-y-auto mt-5">
            <div className="  grid grid-cols-1  md:grid-cols-2  gap-x-4 gap-y-8 mt-4">
              {filteredProperties.slice(0, 8).map((property: any) => (
                <Property key={property.id} property={property} />
              ))}
            </div>
            <button className="hidden mt-4 mx-auto md:block  bg-[#D98A46] text-[#fff]  text-[12px] font-medium px-4 py-3 rounded-full cursor-pointer">
              See All
            </button>
          </div>
        ) : (
          <h3>Not Found!</h3>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
