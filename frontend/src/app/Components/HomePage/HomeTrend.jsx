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
    <div className='mt-[2rem] w-[100vw] h-[10rem]'>
        <h1 className=' text-[#ffdd95] font-semibold text-xl leading-[1.3]'>Trending</h1>
        <div className='w-[100vw] h-full mt-2 pr-14 relative'>
            <div className='flex h-full w-full'>
                <div className='bg-red-50 w-[100%] h-full'>
                    <Carousel indicators={false} slide={false} leftControl={FaChevronLeft} rightControl={FaChevronRight}>
                        <div className='w-[100%] h-full flex justify-between'>
                            <div className='w-[16%] h-[317px] flex mr-3 bg-[#242428]'>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 right-0 text-[#ffdd95] text-center leading-4'>01</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        One Piece
                                    </div>
                                </div>

                                <div className='h-full bg-no-repeat object-cover w-5' style={{ backgroundImage: 'url(https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg)'}}>

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
                    </Carousel>
                    
                    
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