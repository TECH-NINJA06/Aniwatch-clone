'use client'

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Carousel } from 'flowbite-react';

const HomeCarousal = () => {
  const [home, setHome] = useState({})
  // const [spotlight, setSpotlight] = useState([])
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
    axios.get('https://api-aniwatch.onrender.com/anime/home')
    .then((response) =>{
      setHome(response.data);
      console.log(home);
    })
    .catch((error) =>{
      console.log("Error at carousal axios: " + error);
    })
  
  }, [])
  
 
 

  const homeSpotlight = home.spotlightAnimes;

  return (
    <div className=' w-[100vw] h-[600px] relative'>
      <Carousel indicators={false}>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: 'url("https://img.flawlessfiles.com/_r/1366x768/100/db/75/db753c5dbfe30364df55577f6f564ced/db753c5dbfe30364df55577f6f564ced.jpg")'}}>
          {/* <img src='https://img.flawlessfiles.com/_r/1366x768/100/db/75/db753c5dbfe30364df55577f6f564ced/db753c5dbfe30364df55577f6f564ced.jpg' alt="" className='w-full h-full' /> */}
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/96/2f/962ffd97d28067a8b105145651cea9b2/962ffd97d28067a8b105145651cea9b2.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/9d/97/9d97abb689f6bfc0272959bba24b2813/9d97abb689f6bfc0272959bba24b2813.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/31/aa/31aacbf403a8f1c180a940009dbf17f5/31aacbf403a8f1c180a940009dbf17f5.jpeg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/37/40/37407c346d4da96dfdce7330709f4801/37407c346d4da96dfdce7330709f4801.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/29/f5/29f5061c166f8e5cc07ccf80c15bd007/29f5061c166f8e5cc07ccf80c15bd007.jpeg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/b1/5a/b15a6b66cd49e0933ff445d7191c9f85/b15a6b66cd49e0933ff445d7191c9f85.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/b8/d0/b8d042341270be390c9547c462eb8436/b8d042341270be390c9547c462eb8436.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/50/af/50affe2ea9a02c36d5a7c0532c1b7ef9/50affe2ea9a02c36d5a7c0532c1b7ef9.jpeg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/d6/c7/d6c7995386dd1948892b6c46db9e3d96/d6c7995386dd1948892b6c46db9e3d96.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/98/cb/98cbc9f7587ef0814ff43dfffc45069f/98cbc9f7587ef0814ff43dfffc45069f.jpg)`}}>
        </div>
        <div className='h-full w-full bg-cover absolute' style={{ backgroundImage: `url(https://img.flawlessfiles.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg)`}}>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeCarousal