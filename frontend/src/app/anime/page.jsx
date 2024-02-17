"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import HomeNav from "../Components/HomeNav";
import { ANIMES } from "../utils/data.example";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const page = () => {
  const [animes, setAnimes] = useState({});

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api-aniwatch.onrender.com/anime/info?id=${id}`
        );
        const data = await response.data;
        setAnimes(data);
        // await setSpotlight(home.spotlightAnimes)
        // await setSpotlight1(spotlight[0])
        // setPosterUrl1(spotlight1.poster)
        //  console.log(home.spotlightAnimes[0].poster)
        console.log(animes);
        // console.log(spotlight1)
        // console.log(posterUrl1)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

const handleWatch = () => {
  console.log(Hello);
}

  return (
    <div className=" h-[100vh] w-[100vw] flex">
      <HomeNav />
      <div className="h-[75vh] w-full mt-28 flex justify-between">
        <div className="h-full w-[29%]">
          <div className=" anime h-[55%] w-[60%] flex justify-between items-cente mx-10 my-5">
            {/* <img src={animes?.anime?.info?.poster} alt="Anime img" className='h-full w-[5rem]' /> */}
            <img
              src={ANIMES.anime.info.poster}
              alt="Anime img"
              className="h-full w-full aspect-video rounded-lg"
            />
          </div>
        </div>
        <div className="bg-blue-400 h-full w-[69%] mr-10 pl-2">
          <div className="flex items-center text-[#ffdd95] font-bold text-4xl leading-[1.3] h-10 mb-12">
            <h1>{ANIMES.anime.info.name}</h1>
          </div>
          <div className="h-10 w-full flex items-center gap-3">
            <div className="h-7 w-10 flex justify-center items-center
             bg-white text-black my-2 rounded">
              <h1 className=" font-bold text-center">{ANIMES.anime.info.stats.rating}</h1>
            </div>
            <div className="h-7 w-10 flex justify-center items-center
             bg-[#ffdd95] text-black my-2 rounded">
               <h1 className=" font-bold text-center">{ANIMES.anime.info.stats.quality}</h1>
            </div>
            <div className="h-7 w-10 flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1">
              <BsFillBadgeCcFill className='object-contain' />
              <h1 className=" font-bold text-center">{ANIMES.anime.info.stats.episodes.sub}</h1>
            </div>
            <div className="h-7 w-10 flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1">
               <CiMicrophoneOn className='object-contain' />
              <h1 className=" font-bold text-center">{ANIMES.anime.info.stats.episodes.dub}</h1>
            </div>
          </div>
          <div className="w-full h-20 bg-white mt-14 gap-3 flex items-center">
            <div className="h-14 w-52 bg-[#ffdd95] rounded-lg text-black">
              <button className="h-full w-full flex gap-1 justify-center items-center" onClick={handleWatch}>
              <FaPlay />
              <h1 className="font-semibold">Watch now</h1>
              </button>
            </div>
            <div className="h-14 w-52 bg-white rounded-lg text-black">
              <button className="h-full w-full flex gap-1 justify-center items-center" onClick={handleWatch}>
              <FaRegEdit />
              <h1 className="font-semibold">Edit Watch List</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>{animes?.anime?.info?.id}</h1>
      <p>{animes?.anime?.info?.name}</p>
      <img src={animes?.anime?.info?.poster} alt="" />
       */}
    </div>
  );
};

export default page;
