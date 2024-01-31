'use client'

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Carousel } from 'flowbite-react';

const HomeCarousal = () => {
  const [home, setHome] = useState({})
  const [spotlight, setSpotlight] = useState([])
  const [spotlight1, setSpotlight1] = useState({})
  const [posterUrl1, setPosterUrl1] = useState("")
  // const [trending, setTrending] = useState([])
  // const [latest, setLatest] = useState([])
  // const [upcoming, setUpcoming] = useState([])
  // const [top, setTop] = useState([])   // top 10 animes
  // const [airing, setAiring] = useState([])
  // const [genre, setGenre] = useState([])


  // axios.get('https://api-aniwatch.onrender.com/anime/home')
  // .then((response) =>{
  //   setHome(response);
  //   setSpotlight(response.spotlightAnimes);
  //   setTrending(response.trendingAnimes);
  //   setLatest(response.latestEpisodeAnimes);
  //   setUpcoming(response.topUpcomingAnimes);
  //   setTop(response.top10Animes);
  //   setAiring(response.topAiringAnimes);
  //   setGenre(response.genres);


  //   console.log(response);
  //   console.log(response.spotlightAnimes);
  //   console.log(response.trendingAnimes);
  //   console.log(response);
  //   console.log(response);
  //   console.log(response);
  //   console.log(response);
  //   console.log(response);
  // })
  // .catch((err) =>{
  //   console.log("Error at carousal axios: " + err);
  // })
  //   const getData = async () => {
  //     // const response = await fetch("https://api-aniwatch.onrender.com/anime/home");
  //     // const data = await response.json();
  //     // setHome(data);
  //     try {
        
  //     const getData = await  axios.get('https://api-aniwatch.onrender.com/anime/home')
  //     setHome(getData.data);
  //     //   .then((response) =>{
  //     //   setHome(response);
  //     //   setSpotlight(response.spotlightAnimes);
  //     //   setTrending(response.trendingAnimes);
  //     //   setLatest(response.latestEpisodeAnimes);
  //     //   setUpcoming(response.topUpcomingAnimes);
  //     //   setTop(response.top10Animes);
  //     //   setAiring(response.topAiringAnimes);
  //     //   setGenre(response.genres);


  //     //  console.log(response);
  //     //  console.log(response.spotlightAnimes);
  //     //  console.log(response.trendingAnimes);
  //     //  console.log(response);
  //     //  console.log(response);
  //     //  console.log(response);
  //     //  console.log(response);
  //     //  console.log(response);
      
  //     } catch (error) {
  //       console.log("Error at carousal axios: " + err);
  //     }
  //   };

  //   getData();
  //   console.log("Home" + home);
    
  // }, [])
  
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
  
 
  console.log(spotlight1)
  // const homeSpotlight = home.spotlightAnimes;

  return (
    <div className=' w-[100vw] h-[600px] relative'>
      <Carousel indicators={false}>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[0].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[1].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[2].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[3].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[4].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[5].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[6].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[7].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[8].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[9].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[10].poster : "https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif"}")`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url("${home?.spotlightAnimes ? home.spotlightAnimes[11].poster : "https://cdn.dribbble.com/users/172906/screenshots/1183163/2013-08-04_21_12_53.gif"}")`}}>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeCarousal