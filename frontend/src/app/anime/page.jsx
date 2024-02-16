'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

const page = () => {
    const [animes, setAnimes] = useState({})

    const searchParams = useSearchParams()
 
    const id = searchParams.get('id')

    useEffect(() => {
        ;( async() => {
          try {
            const response = await axios.get(`https://api-aniwatch.onrender.com/anime/info?id=${id}`);
            const data = await response.data
            setAnimes(data)
            // await setSpotlight(home.spotlightAnimes)
            // await setSpotlight1(spotlight[0])
            // setPosterUrl1(spotlight1.poster)
            //  console.log(home.spotlightAnimes[0].poster)
            console.log(animes)
            // console.log(spotlight1)
            // console.log(posterUrl1)
          } catch (error) {
            console.log(error);
          }
        })()
      
      }, [])
  return (
    <div>
      <h2>Hello</h2>
      <h1>{animes?.anime?.info?.id}</h1>
      <p>{animes?.anime?.info?.name}</p>
      <img src={animes?.anime?.info?.poster} alt="" />
      
      </div>
  )
}

export default page