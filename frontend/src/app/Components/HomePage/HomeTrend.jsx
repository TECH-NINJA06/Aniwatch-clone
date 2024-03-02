"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { useRouter } from "next/navigation";

const HomeTrend = () => {
  const router = useRouter();

  const [home, setHome] = useState({});
  const [homeTrending, setHomeTrending] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-aniwatch.onrender.com/anime/home")
      .then((response) => {
        setHome(response.data);

        console.log("homeTrending: " + home);
      })
      .catch((error) => {
        console.log("Error at carousal axios: " + error);
      });
  }, []);

  const searchClick = (animeId) => {
    router.push(`/anime?id=${animeId}`);
};
  const searchClick10 = () => {
    router.push(`/anime?id=${home.trendingAnimes[9].id}`);
  };

  return (
    <div className="mt-[2rem] w-[100vw] h-[10rem] mb-56">
      <h1 className=" text-[#ffdd95] font-semibold text-xl leading-[1.3]">
        Trending
      </h1>
      <div className="w-[100vw] mt-2 pr-14 relative">
        <div className="flex h-full w-screen">
          <div className="bg-[#242428] w-screen h-full">
            <div className="w-screen h-[20rem] flex justify-between bg-[#242428] overflow-x-auto overflow-y-hidden">
              {/* <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]'  onClick={searchClick1}>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[0].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[0].name.slice(0, 16) : "..."}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[0].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[18%] h-[317px] flex mr-3 relative bg-[#242428]' onClick={searchClick2}>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[1].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[1].name.slice(0, 16) : "..."}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[1].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[20%] h-[317px] flex mr-3 relative bg-[#242428]' onClick={searchClick3}>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[2].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[2].name.slice(0, 16) : "..."}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[2].poster : ""}")`}}>
                                </div>
                                
                            </div>
                            <div className='w-[20%] h-[317px] flex mr-3 relative bg-[#242428]' onClick={searchClick4}>
                                <div className='w-10 h-full'>
                                    <span className='absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4'>0{home?.trendingAnimes ? home.trendingAnimes[3].rank : ""}</span>
                                    <div className='number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm'>
                                        {home?.trendingAnimes ? home.trendingAnimes[3].name.slice(0, 16) : "..."}
                                    </div>
                                </div>
                                <div className='h-full w-full bg-center bg-cover ' style={{ backgroundImage: `url("${home?.trendingAnimes ? home.trendingAnimes[3].poster : ""}")`}}>
                                </div>
                                
                            </div> */}
              <div className="h-[20rem] flex justify-between bg-[#242428] overflow-y-hidden snap-x w-[100rem] snap-mandatory gap-4 overflow-scroll scroll-ml-3">
                {home?.trendingAnimes?.slice(0, 9).map((anime, index) => (
                  <div
                    key={index}
                    className="w-[70%] h-full flex mr-3 relative bg-[#242428]"
                    onClick={() => searchClick(anime.id)}
                  >
                    <div className="w-10 h-full">
                      <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                        0{anime.rank}
                      </span>
                      <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                        {anime.name.slice(0, 16)}
                      </div>
                    </div>
                    <div
                      className="h-full w-full bg-center bg-cover"
                      style={{ backgroundImage: `url("${anime.poster}")` }}
                    ></div>
                  </div>
                ))}
{/* 
                <div
                  className="w-[18%] h-[317px] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick5}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      0{home?.trendingAnimes ? home.trendingAnimes[4].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[4].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[4].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div>
                <div
                  className="w-[18%] h-[317px] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick6}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      0{home?.trendingAnimes ? home.trendingAnimes[5].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[5].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[5].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div>
                <div
                  className="w-[18%] h-[317px] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick7}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      0{home?.trendingAnimes ? home.trendingAnimes[6].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[6].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[6].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div>
                <div
                  className="w-[18%] h-[317px] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick8}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      0{home?.trendingAnimes ? home.trendingAnimes[7].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[7].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[7].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div>
                <div
                  className="w-[18%] h-[317px] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick9}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      0{home?.trendingAnimes ? home.trendingAnimes[8].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[8].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[8].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div> */}
                <div
                  className="w-[70%] h-[20rem] flex mr-3 relative bg-[#242428]"
                  onClick={searchClick10}
                >
                  <div className="w-10 h-full">
                    <span className="absolute bottom-0 left-0 pl-2 text-[#ffdd95] text-center leading-4">
                      {home?.trendingAnimes ? home.trendingAnimes[9].rank : ""}
                    </span>
                    <div className="number bottom-[90px] w-36 absolute left-[-55px] font-medium text-left text-sm">
                      {home?.trendingAnimes
                        ? home.trendingAnimes[9].name.slice(0, 16)
                        : "..."}
                    </div>
                  </div>
                  <div
                    className="h-full w-full bg-center bg-cover "
                    style={{
                      backgroundImage: `url("${
                        home?.trendingAnimes
                          ? home.trendingAnimes[9].poster
                          : ""
                      }")`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-10">
            <FaChevronRight className=" h-[48%]" />
            <FaChevronLeft className=" h-[48%]" />
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
  );
};

export default HomeTrend;
