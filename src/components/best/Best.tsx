import img1 from "../../assets/images/best1.jpg.png";
import img2 from "../../assets/images/best2.jpg.png";
import img3 from "../../assets/images/best3.jpg.png";
import img4 from "../../assets/images/best4.jpg.png";
import img5 from "../../assets/images/best5.jpg.png";

interface cards {
  id: number;
  img: string;
  title: string;
  properties: string;
}

const cards = [
  {
    id: 1,
    img: img1,
    title: "Town House",
    properties: "2 properties",
  },
  {
    id: 2,

    img: img2,
    title: "Town House",
    properties: "2 properties",
  },
  {
    id: 3,

    img: img3,
    title: "Town House",
    properties: "2 properties",
  },
  {
    id: 4,

    img: img4,
    title: "Town House",
    properties: "2 properties",
  },
  {
    id: 5,

    img: img5,
    title: "Town House",
    properties: "2 properties",
  },
  {
    id: 6,

    img: img5,
    title: "Town House",
    properties: "2 properties",
  },
];
function Best() {
  return (
    <>
      <div className="px-12 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-xl sm:text-2xl xl:text-3xl">
          Discover the latest projects
        </h1>
        <p className="px-2 md:px-40 lg:px-80 xl:px-[29rem]  text-[12px] xl:text-sm pt-2  text-center">
          Take a deep dive and browse homes for sale, original photos, resident
          reviews and local insights to find what is right for you.
        </p>
      </div>
      <div className="px-5 lg:px-32">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-center">
          {cards.map((card) => (
            <div
              className={`relative ${card.id === 6 ? "xl:hidden" : "block"}`}
            >
              <div>
                <img
                  src={card.img}
                  alt="image"
                  className="rounded-xl w-full "
                />
              </div>
              <div className="absolute bottom-2 left-8 md:left-4 lg:left-2 xl:left-2">
                <span className="bg-gray-600/70 flex w-80 lg:w-56 xl:w-52 h-9 items-center justify-center gap-9 xl:gap-6 text-white rounded-xl">
                  <h2 className="text-md">{card.title}</h2>
                  <p className="text-md">{card.properties}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Best;
