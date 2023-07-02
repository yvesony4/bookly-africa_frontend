import React from 'react'
import BestSeller from './BestSeller'
import HomeStays from './HomeStays'
import BodyText from './Sections/BodyText'
import Navbar from './Sections/Navbar'
import TopDestination from './TopDestination'
import AfricaMarket from './AfricaMarket'
import BestPromotion from './BestPromotion'

export default function Home() {
  return (
   <div>
    <Navbar />
    <BodyText />
    <TopDestination />
    <BestSeller />
    <HomeStays />
    <BestPromotion />
    <AfricaMarket />
   </div>
  )
}
