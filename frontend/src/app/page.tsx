import React from 'react'
import HomePageNav from "../app/Components/HomePageNav"
import HomeHeroSection from "../app/Components/HomeHeroSection"
import VisitSite from './Components/VisitSite'

const page = () => {
  return (
    <div>
      <HomePageNav />
      <HomeHeroSection />
      <VisitSite />
    </div>
  )
}

export default page