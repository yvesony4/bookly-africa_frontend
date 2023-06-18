import React from 'react'
import BestSeller from './BestSeller'
import BodyText from './Sections/BodyText'
import Navbar from './Sections/Navbar'
import TopDestination from './TopDestination'

export default function Home() {
  return (
   <div>
     <Navbar />
    <BodyText />
    <TopDestination />
    <BestSeller />
   </div>
  )
}
