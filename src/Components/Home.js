import React from 'react'
import BestSeller from './BestSeller'
import HomeStays from './HomeStays'
import BodyText from './Sections/BodyText'
import Navbar from './Sections/Navbar'
import TopDestination from './TopDestination'
import AfricaMarket from './AfricaMarket'
import BestPromotion from './BestPromotion'
import CarTrending from './CarTrending'
import UpComingEvent from './UpComingEvent'

export default function Home() {
  return (
   <div>
    <Navbar />
    <BodyText />
    <TopDestination />
    <BestSeller />
    <HomeStays />
    <BestPromotion />
    <CarTrending />
    <UpComingEvent />
    <AfricaMarket />
   </div>
  )
}
