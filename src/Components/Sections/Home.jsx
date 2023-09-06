import React from 'react'
import BestSeller from './BestSeller'
import HomeStays from './HomeStays'
import BodyText from '../Sections/BodyText'
import TopDestination from './TopDestination'
import AfricaMarket from './AfricaMarket'
import BestPromotion from './BestPromotion'
import CarTrending from './CarTrending'
import UpComingEvent from './UpComingEvent'
import PopularDestination from './PopularDestination'

export default function Home() {
  return (
   <div>
    <BodyText />
    <TopDestination />
    <BestSeller />
    <HomeStays />
    <BestPromotion />
    <CarTrending />
    <UpComingEvent />
    <AfricaMarket />
    <PopularDestination />
   </div>
  )
}
