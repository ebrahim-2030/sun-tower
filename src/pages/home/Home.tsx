import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../../components/hero/Hero";
import Best from "../../components/best/Best";
import TrendingListings from "../../components/Trending-Listings/TrendingListings";
import Exclusive from "../../components/Exclusive/Exclusive";
import ExploreCities from "../../components/ExploreCities/ExploreCities";
import Renting from "../../components/renting/Renting";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="mt-20">
        <Best />
      </section>
      <section className="mt-16">
        <TrendingListings />
      </section>
      <section className="bg-gray-100 mt-16 py-20">
        <Exclusive />
      </section>
      <section className="mt-16">
        <TrendingListings />
      </section>
      <section className="mt-16">
        <ExploreCities />
      </section>
      <section className="mt-16">
        <Renting />
      </section>
    </div>
  );
};

export default Home;
