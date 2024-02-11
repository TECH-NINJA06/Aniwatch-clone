'use client'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import AnimeCard, { AnimeProp } from '../Components/Search/AnimeCard'
import { fetchAnime } from '../utils/action'

const page = () => {

  const searchParams = useSearchParams()
 
  const keyword = searchParams.get('keyword')
  function fromKebabCase(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  const kebabCaseString = keyword;
  const normalText = fromKebabCase(kebabCaseString);
  
  // useEffect(() => {
  //   ;(async () =>{
  //       // const response = await axios.get(`https://api-aniwatch.onrender.com/anime/search?q=${keyword}`);
  //       // const data = await response.data;
  //       // setSearch(data)
  //       // console.log(data)
  //     const data = await fetchAnime(1, keyword);
  //     })()
  // }, [])
   
  const [search, setSearch] = useState({})
  const [query, setQuery] = useState("")

  useEffect(() => {
    ;(async () =>{
      const response = await axios.get(`https://api-aniwatch.onrender.com/anime/search?q=${keyword}`);
      const data = await response.data;
      setSearch(data)
      console.log(data)

     })()

  }, [])
  

  
  
  

  return (
    <div className=' h-[100vh] w-[100vw] flex flex-col'>
      <HomeNav />
      <div className='h-10 w-full mt-28 px-3 mb-5'>
        <h1 className='text-[#ffdd95] font-semibold text-3xl leading-[1.3]'>
          Search Results for: {normalText}   
        </h1>
      </div>
      <div className='h-full w-full'>
        <div className='h-full w-full px-3'>
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {search?.animes?.map((item, index) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
          {/* <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[1].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {search?.animes ? home.trendingAnimes[1].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[1].poster : ""}")`}}>
                                </div>
                                
                            </div> */}
          </section>
          {/* <LoadMore /> */}
        </div>
      </div>
        
    </div>
  )
}

export default page