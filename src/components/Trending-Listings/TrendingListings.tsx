import { properties } from "../../data/Data";
import { useState } from "react";
import Property from "./Property";

const TrendingListings = () => {
  const [category, setCategory] = useState("All");

  const categories=
   [ "All",
    "Cottags",
    "Apartments",
    "House",
  ];

  const filterProperties = properties.filter(
    (property) => category === "All" || category === property.category
  );

  return (
    <div className="px-5 lg:px-8">
      <h1 className="text-center font-medium text-2xl py-4">
        Trending Listings
      </h1>
      <div className="pb-10 md:col-span-2 w-full flex items-center flex-wrap justify-center gap-2 sm:gap-3 md:gap-2">
        {categories.map((c, index) => (
          <button
            key={index}
            onClick={() => setCategory(c)}
            className={`py-2 px-5 cursor-pointer text-xs sm:text-sm md:text-base rounded-3xl transition-all duration-300 border 
              ${c === category ? "bg-[#CC8242] text-white" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 w-full items-start">
        {filterProperties.slice(0, 12).map((property: any) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default TrendingListings;
