import React from 'react'
import HomePageNav from "./Components/LandingPage/HomePageNav"
import HomeHeroSection from "./Components/LandingPage/HomeHeroSection"
import VisitSite from './Components/LandingPage/VisitSite'

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