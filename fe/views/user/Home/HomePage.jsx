import React from 'react'
import Banner from "./components/Banner";
import FeatureBar from './components/FeatureBar';
import FeaturedProducts from './components/FeaturedProducts';
import TopRating from './components/TopRating';
import RecommendedSection from './components/RecommendedSection';
import PromotionBanner from './components/PromotionBanner';
import Newsletter from './components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <FeatureBar/>
      <Banner />
      <FeaturedProducts />
      <RecommendedSection />
      <PromotionBanner />
      <TopRating />
      <Newsletter />
    </div>
  )
}

export default HomePage