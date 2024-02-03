'use client'

import React, {useState, useEffect} from 'react'
import HomeNav from '../Components/HomeNav'
import HomeCarousal from '../Components/HomePage/HomeCarousal'
import HomeTrend from '../Components/HomePage/HomeTrend'
import HomeFeatured from '../Components/HomePage/HomeFeatured'
import Share from '../Components/Share'
import axios from 'axios'

const Home = () => {
  const [home, setHome] = useState({})

  useEffect(() => {
    ;( async() => {
      try {
        const response = await axios.get("https://api-aniwatch.onrender.com/anime/home");
        const data = await response.data
        setHome(data)
        // await setSpotlight(home.spotlightAnimes)
        // await setSpotlight1(spotlight[0])
        // setPosterUrl1(spotlight1.poster)
         console.log(home.spotlightAnimes[0].poster)
        // console.log(home)
        // console.log(spotlight1)
        // console.log(posterUrl1)
      } catch (error) {
        console.log(error);
      }
    })()
  
  }, [])

  if (home?.spotlightAnimes) {
     return (
    <div className=' min-h-[100vh]'>
      <HomeNav />
      <HomeCarousal />
      <HomeTrend />
      <HomeFeatured />
      <Share />
    </div>
    )
  } else {
    return (
      <div className='w-[100vw] h-[100vh] bg-no-repeat object-cover flex justify-center items-center p-40 bg-white '>
        <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="Loading" className=' h-full w-full' />
      </div>
    )
  }
 
}

export default Home