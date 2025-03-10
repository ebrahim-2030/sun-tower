import img1 from "../../assets/images/p2-hero1.png";
import img2 from "../../assets/images/p2-hero2.png";
import img3 from "../../assets/images/p2-hero3.png";
import img4 from "../../assets/images/p2-hero4.png";
import img5 from "../../assets/images/p2-hero5.png";
import img6 from "../../assets/images/p2-hero6.png";

function SecondHero() {
  return (
    <div className="relative  flex flex-col items-center justify-center text-center py-72 px- bg-gradient-to-r from-white to-green-50">
      {/* Floating Images */}
      <div className="absolute top-40 left-16 flex flex-col gap-2 px-20">
        <img src={img1} alt="" className="relative left-32 " />
        <img src={img2} alt="" className=" w-[89px] h-[98px]" />
        <img src={img3} alt="" className=" relative left-48 -top-4" />
      </div>
    <div className="relative -top-10">
       {/* Text Section */}
       <p className="text-xl font-semibold text-gray-600">Be the part of our community over</p>
      <h1 className="text-7xl font-bold text-gray-900">217,924+</h1>
      <p className="text-xl font-semibold text-gray-600">people from around the world.</p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
        Join Community →
      </button>
    </div>
      <div className="absolute top-40 right-2 flex flex-col gap-2 px-16">
      <img src={img4} alt="" className="relative right-52   " />
        <img src={img5} alt="" className="w-[89px] h-[98px] left-4" />
        <img src={img6} alt="" className="relative right-72 -top-4" />
      </div>
    </div>
  );
}

export default SecondHero;
