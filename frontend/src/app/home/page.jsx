import React from 'react'
import HomeNav from '../Components/HomeNav'
import HomeCarousal from '../Components/HomePage/HomeCarousal'
import HomeTrend from '../Components/HomePage/HomeTrend'
import HomeFeatured from '../Components/HomePage/HomeFeatured'
import Share from '../Components/Share'

const Home = () => {
  return (
    <div className=' min-h-[100vh]'>
      <HomeNav />
      <HomeCarousal />
      <HomeTrend />
      <HomeFeatured />
      <Share />
    </div>
  )
}

export default Home