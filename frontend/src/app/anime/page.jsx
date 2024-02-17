"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import HomeNav from "../Components/HomeNav";
import AnimeCard, { AnimeProp } from '../Components/Search/AnimeCard'
import { ANIMES } from "../utils/data.example";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const page = () => {
  const [animes, setAnimes] = useState({});
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api-aniwatch.onrender.com/anime/info?id=${id}`
  //       );
  //       const data = await response.data;
  //       setAnimes(data);
  //       // await setSpotlight(home.spotlightAnimes)
  //       // await setSpotlight1(spotlight[0])
  //       // setPosterUrl1(spotlight1.poster)
  //       //  console.log(home.spotlightAnimes[0].poster)
  //       console.log(animes);
  //       // console.log(spotlight1)
  //       // console.log(posterUrl1)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const handleWatch = () => {
    console.log(Hello);
  };

  const description = `${ANIMES.anime.info.description}`;

  return (
    <div className=" min-h-[100vh] w-[100vw] flex flex-col">
      <HomeNav />
      {/* <div
        className="bg-no-repeat bg-center bg-cover before:grayscale-[100%]"
        style={{ backgroundImage: `url("${ANIMES.anime.info.poster}")` }}
      > */}
        <div className=" mx-10 ">
        <div className=" backdrop-blur">
          <div className="h-[75vh] w-full mt-28 flex justify-between">
            <div className="h-full w-[29%]">
              <div className=" anime h-[55%] w-[60%] flex justify-between items-cente my-5">
                {/* <img src={animes?.anime?.info?.poster} alt="Anime img" className='h-full w-[5rem]' /> */}
                <img
                  src={ANIMES.anime.info.poster}
                  alt="Anime img"
                  className="h-full w-full aspect-video rounded-lg"
                />
              </div>
            </div>
            <div className="h-full w-[69%] mr-10 pl-2">
              <div className="flex items-center text-[#ffdd95] font-bold text-4xl leading-[1.3] h-10 mb-9">
                <h1>{ANIMES.anime.info.name}</h1>
              </div>
              <div className="h-10 w-full flex items-center gap-3">
                <div
                  className="h-7 w-10 flex justify-center items-center
             bg-white text-black my-2 rounded"
                >
                  <h1 className=" font-bold text-center">
                    {ANIMES.anime.info.stats.rating}
                  </h1>
                </div>
                <div
                  className="h-7 w-10 flex justify-center items-center
             bg-[#ffdd95] text-black my-2 rounded"
                >
                  <h1 className=" font-bold text-center">
                    {ANIMES.anime.info.stats.quality}
                  </h1>
                </div>
                <div
                  className="h-7 w-10 flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1"
                >
                  <BsFillBadgeCcFill className="object-contain" />
                  <h1 className=" font-bold text-center">
                    {ANIMES.anime.info.stats.episodes.sub}
                  </h1>
                </div>
                <div
                  className="h-7 w-10 flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1"
                >
                  <CiMicrophoneOn className="object-contain" />
                  <h1 className=" font-bold text-center">
                    {ANIMES.anime.info.stats.episodes.dub}
                  </h1>
                </div>
              </div>
              <div className="w-full h-20 mt-8 gap-3 flex items-center">
                <div className="h-14 w-52 bg-[#ffdd95] rounded-lg text-black">
                  <button
                    className="h-full w-full flex gap-1 justify-center items-center"
                    onClick={handleWatch}
                  >
                    <FaPlay />
                    <h1 className="font-semibold">Watch now</h1>
                  </button>
                </div>
                <div className="h-14 w-52 bg-white rounded-lg text-black">
                  <button
                    className="h-full w-full flex gap-1 justify-center items-center"
                    onClick={handleWatch}
                  >
                    <FaRegEdit />
                    <h1 className="font-semibold">Edit Watch List</h1>
                  </button>
                </div>
              </div>
              <div className="w-full h-56 mt-10 text-white">
                <p>
                  {showFullText ? description : `${description.slice(0, 400)}`}{" "}
                  <span onClick={toggleText} style={{ cursor: "pointer" }}>
                    {showFullText ? " ...less" : " ...more"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur h-[20rem] w-full mt-5 leading-8">
          <p>
            <span className=" text-base font-semibold">Japanese: </span>
            {ANIMES.anime.moreInfo.japanese}
          </p>
          <p>
            <span className=" text-base font-semibold">Synonyms: </span>
            {ANIMES.anime.moreInfo.synonyms}
          </p>
          <p>
            <span className=" text-base font-semibold">Aired: </span>
            {ANIMES.anime.moreInfo.aired}
          </p>
          <p>
            <span className=" text-base font-semibold">Premiered: </span>
            {ANIMES.anime.moreInfo.premiered}
          </p>
          <p>
            <span className=" text-base font-semibold">Duration: </span>
            {ANIMES.anime.moreInfo.duration}
          </p>
          <p>
            <span className=" text-base font-semibold">Status: </span>
            {ANIMES.anime.moreInfo.status}
          </p>
          <p>
            <span className=" text-base font-semibold">MAL Score: </span>
            {ANIMES.anime.moreInfo.malscore}
          </p>
          <p>
            <span className=" text-base font-semibold">Genres: </span>
            {ANIMES.anime.moreInfo.genres[0]}, {ANIMES.anime.moreInfo.genres[1]}
            , {ANIMES.anime.moreInfo.genres[2]}
          </p>
          <p>
            <span className=" text-base font-semibold">Studios: </span>
            {ANIMES.anime.moreInfo.studios}
          </p>
          <p>
            <span className=" text-base font-semibold">Producers: </span>
            {ANIMES.anime.moreInfo.producers[0]}
          </p>
        </div>
        <div className="h-[100vh] w-[100vw] my-10">
          <div className="h-10">
          <h1 className='text-[#ffdd95] font-semibold text-2xl leading-[1.3]'>
          Recommended for you  
          </h1>
          </div>
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {ANIMES.recommendedAnimes.map((item, index) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
          </section>
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
