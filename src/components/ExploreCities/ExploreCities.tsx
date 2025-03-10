import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import { useRef } from "react"; // Import useRef hook to reference the slider
import { GrFormNext, GrFormPrevious } from "react-icons/gr"; // Import next and previous icons
import chicago from "../../assets/images/explore1.png"; // Import images for the slider
import lostangeless from "../../assets/images/explore2.png";
import miami from "../../assets/images/explore3.png";
import florida from "../../assets/images/explore4.png";
import newyark from "../../assets/images/explore5.png";

// Define the structure of the Card object
interface Card {
  img: string; // Image source
  subtitle: string; // Subtitle for the card
  title: string; // Title of the card
  objectID: number; // Unique ID for each card
}

const ExploreCities: React.FC = () => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null); // Create a reference for the slider

  // Slider settings
  const settings = {
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 5, // Number of slides visible at once (for large screens)
    slidesToScroll: 2, // Number of slides to scroll per action
    responsive: [ // Responsive settings
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 425, // For screens below 425px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  // Array of cards with their images, titles, and subtitles
  const cards: Card[] = [
    { img: chicago, subtitle: "2 Properties", title: "Chicago", objectID: 0 },
    { img: lostangeless, subtitle: "1 Property", title: "Los Angeles", objectID: 1 },
    { img: miami, subtitle: "2 Properties", title: "Miami", objectID: 2 },
    { img: florida, subtitle: "3 Properties", title: "Florida", objectID: 3 },
    { img: newyark, subtitle: "2 Properties", title: "New York", objectID: 4 },
    { img: miami, subtitle: "2 Properties", title: "Miami", objectID: 5 },
    { img: florida, subtitle: "3 Properties", title: "Florida", objectID: 6 },
    { img: newyark, subtitle: "2 Properties", title: "New York", objectID: 7 },
  ];

  return (
    <div className="w-full h-[90vh] flex justify-center bg-[#F9F9F9] items-center relative"> {/* Container for the slider */}
      <div className="w-full max-w-[80rem] px-20 sm:px-32 relative flex flex-col items-center"> {/* Wrapper for content */}
        <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl pb-3">Explore Cities</h1> {/* Heading */}
        <p className="text-center pb-10 text-xs md:text-sm">Discover the best places to live and invest in.</p> {/* Subtitle */}

        <div className="relative w-full flex items-center"> {/* Container for slider and buttons */}
          <button
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 border-2 bg-white px-5 py-2 rounded-full shadow-md" // Position the previous button outside the card area
            onClick={() => sliderRef.current?.slickPrev()} // Move to the previous slide when clicked
          >
            <GrFormPrevious size={24} /> {/* Previous button icon */}
          </button>

          <div className="w-full"> {/* Wrapper for slider to maintain spacing */}
            <Slider ref={sliderRef} {...settings}> {/* Slider component with reference and settings */}
              {cards.map((card) => (
                <div key={card.objectID} className="object-cover rounded-md w-[300px] px-5"> {/* Individual card */}
                  <img src={card.img} alt={card.title} className="h-full object-cover rounded-md" /> {/* Card image */}
                  <p className="text-xs text-gray-500 mt-2">{card.subtitle}</p> {/* Card subtitle */}
                  <h3 className="text-sm font-semibold">{card.title}</h3> {/* Card title */}
                </div>
              ))}
            </Slider>
          </div>

          <button
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 border-2 bg-white px-5 py-2 rounded-full shadow-md" // Position the next button outside the card area
            onClick={() => sliderRef.current?.slickNext()} // Move to the next slide when clicked
          >
            <GrFormNext size={24} /> {/* Next button icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCities; // Export the ExploreCities component
