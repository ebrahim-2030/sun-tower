import SecondHero from '../../components/secondHero/SecondHero'
import TrendingListings from '../../components/Trending-Listings/TrendingListings'

const Properties = () => {
  return (
    <div>
        <section>
            <SecondHero />
        </section>
        <section className='mt-20'>
            <TrendingListings />
        </section>
    </div>
  )
}

export default Properties