import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from './../components/BestSeller';
import Policy from './../components/Policy';
import NewsLetterBox from './../components/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home