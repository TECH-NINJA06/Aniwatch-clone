'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { Carousel } from 'flowbite-react';
import Link from 'next/link';

const HomeTrend = () => {

    const [home, setHome] = useState({})
    const [homeTrending, setHomeTrending] = useState([])

    useEffect(() => {
        axios.get('https://api-aniwatch.onrender.com/anime/home')
        .then((response) =>{
          setHome(response.data);
          
          console.log( "homeTrending: "+ home );
        })
        .catch((error) =>{
          console.log("Error at carousal axios: " + error);
        })
      
    }, [])

    

  return (
    <div className='mt-[2rem] w-[100vw] h-[10rem] mb-56'>
        <h1 className=' text-[#ffdd95] font-semibold text-xl leading-[1.3]'>Trending</h1>
        <div className='w-[100vw] h-full mt-2 pr-14 relative'>
            <div className='flex h-full w-full'>
                <div className='bg-[#242428] w-[100%] h-full'>
                        <div className='w-[100%] h-full flex justify-between bg-[#242428]'>
                            <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[0].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[0].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[0].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[1].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[1].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[1].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[20%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[2].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[2].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[2].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[20%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[3].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[3].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[3].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[4].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[4].name : ""}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[4].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            {/* <div className='w-[16%] h-full flex mr-3 bg-[#242428]'>
                                <div className=' top-0 left-0 bottom-0 w-10'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full w-full bg-no-repeat object-cover' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

                                </div>
                            </div>
                            <div className='w-[16%] h-full flex mr-3 bg-[#242428]'>
                                <div className=' top-0 left-0 bottom-0 w-10'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full w-full bg-no-repeat object-cover' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

                                </div>
                            </div>
                            <div className='w-[16%] h-full flex mr-3 bg-[#242428]'>
                                <div className=' top-0 left-0 bottom-0 w-10'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full w-full bg-no-repeat object-cover' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

                                </div>
                            </div>
                            <div className='w-[16%] h-full flex mr-3 bg-[#242428]'>
                                <div className=' top-0 left-0 bottom-0 w-10'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full w-full bg-no-repeat object-cover' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

                                </div>
                            </div>
                            <div className='w-[16%] h-full flex mr-3 bg-[#242428]'>
                                <div className=' top-0 left-0 bottom-0 w-10'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full w-full bg-no-repeat object-cover' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

                                </div>
                            </div> */}
                        </div>
                        <div className='w-[100%] h-full'>
                        <div>
                        
                            </div>
                            <div>
                            
                            </div>
                            <div>
                            
                            </div>
                            <div>
                            
                            </div>
                        </div>
                    
                    
                    <div>
                        
                    </div>


                </div>
                <div className='absolute top-0 right-0 bottom-0 w-10'>
                <FaChevronRight className=' h-[48%]' />
                <FaChevronLeft className=' h-[48%]' />
                </div>
                {/* {
                homeTrending.map((trending) =>(
                        <div className='bg-red-50'>

                        </div>
                        <div>

                        </div>
                    
                    
                ))
                }  */}
            </div>      
        </div>
        
    </div>
  )
}

export default HomeTrend