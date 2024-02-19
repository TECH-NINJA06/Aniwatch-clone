"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import HomeNav from "../Components/HomeNav";
import AnimeCard from "../Components/Search/AnimeCard";
import { ANIMES } from "../utils/data.example";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [animes, setAnimes] = useState({});
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

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
        console.log(`"animePage:" ${animes}`);
        // console.log(spotlight1)
        // console.log(posterUrl1)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleWatch = () => {
    router.push(`/anime/watch?id=${animes?.anime?.info.id}?ep=1`);
  };

  // const demoDescription = `${ANIMES.anime.info.description}`;
  const description = `${animes?.anime?.info?.description}`;

  return (
    <div className=" min-h-[100vh] w-[100vw] flex flex-col">
      <HomeNav />
      {/* <div
        className="bg-no-repeat bg-center bg-cover before:grayscale-[100%]"
        style={{ backgroundImage: `url("${ANIMES.anime.info.poster}")` }}
      > */}
      <div className=" px-10 ">
        <div className="">
          <div className="h-[75vh] w-full mt-28 flex justify-between">
            <div className="h-full w-[29%]">
              <div className=" anime h-[55%] w-[60%] flex justify-between items-cente my-5">
                {/* <img
                  src={ANIMES.anime.info.poster}
                  alt="Anime img"
                  className="h-full w-full aspect-video rounded-lg"
                /> */}
                <img
                  src={animes?.anime?.info?.poster}
                  alt="Anime img"
                  className="h-full w-full aspect-video rounded-lg"
                />
              </div>
            </div>
            <div className="h-full w-[69%] mr-10 pl-2">
              <div className="flex items-center text-[#ffdd95] font-bold text-4xl leading-[1.3] h-10 mb-9">
                {/* <h1>{ANIMES.anime.info.name}</h1> */}
                <h1>{animes?.anime?.info?.name}</h1>
              </div>
              <div className="h-10 w-full flex items-center gap-3">
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-white text-black my-2 rounded"
                >
                  <h1 className=" font-bold text-center">
                    {/* {ANIMES.anime.info.stats.rating} */}
                    {animes?.anime?.info?.stats?.rating}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-[#ffdd95] text-black my-2 rounded"
                >
                  <h1 className=" font-bold text-center">
                    {/* {ANIMES.anime.info.stats.quality} */}
                    {animes?.anime?.info?.stats?.quality}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1"
                >
                  <BsFillBadgeCcFill className="object-contain" />
                  <h1 className=" font-bold text-center">
                    {/* {ANIMES.anime.info.stats.episodes.sub} */}
                    {animes?.anime?.info?.stats?.episodes?.sub}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1"
                >
                  <CiMicrophoneOn className="object-contain" />
                  <h1 className=" font-bold text-center">
                    {/* {ANIMES.anime.info.stats.episodes.dub} */}
                    {animes?.anime?.info?.stats?.episodes?.dub}
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
        <div className="h-[20rem] w-full mt-5 leading-8">
          <p>
            <span className=" text-base font-semibold">Japanese: </span>
            {/* {ANIMES.anime.moreInfo.japanese} */}
            {animes?.anime?.moreInfo?.japanese}
          </p>
          <p>
            <span className=" text-base font-semibold">Synonyms: </span>
            {/* {ANIMES.anime.moreInfo.synonyms} */}
            {animes?.anime?.moreInfo?.synonyms}
          </p>
          <p>
            <span className=" text-base font-semibold">Aired: </span>
            {/* {ANIMES.anime.moreInfo.aired} */}
            {animes?.anime?.moreInfo?.aired}
          </p>
          <p>
            <span className=" text-base font-semibold">Premiered: </span>
            {/* {ANIMES.anime.moreInfo.premiered} */}
            {animes?.anime?.moreInfo?.premiered}
          </p>
          <p>
            <span className=" text-base font-semibold">Duration: </span>
            {/* {ANIMES.anime.moreInfo.duration} */}
            {animes?.anime?.moreInfo?.duration}
          </p>
          <p>
            <span className=" text-base font-semibold">Status: </span>
            {/* {ANIMES.anime.moreInfo.status} */}
            {animes?.anime?.moreInfo?.status}
          </p>
          <p>
            <span className=" text-base font-semibold">MAL Score: </span>
            {/* {ANIMES.anime.moreInfo.malscore} */}
            {animes?.anime?.moreInfo?.malscore}
          </p>
          <p>
            <span className=" text-base font-semibold">Genres: </span>
            {/* {ANIMES.anime.moreInfo.genres[0]}, {ANIMES.anime.moreInfo.genres[1]}
            , {ANIMES.anime.moreInfo.genres[2]},{" "}
            {ANIMES.anime.moreInfo.genres[3]}, {ANIMES.anime.moreInfo.genres[4]}
            , {ANIMES.anime.moreInfo.genres[5]},{" "}

              {ANIMES?.anime?.moreInfo?.genres[6]}, {ANIMES.anime.moreInfo.genres[7]}*/}
            {animes?.anime?.moreInfo?.genres[0]},{" "}
            {animes?.anime?.moreInfo?.genres[1]},{" "}
            {animes?.anime?.moreInfo?.genres[2]},{" "}
            {animes?.anime?.moreInfo?.genres[3]},{" "}
            {animes?.anime?.moreInfo?.genres[4]},{" "}
            {animes?.anime?.moreInfo?.genres[5]},{" "}
            {animes?.anime?.moreInfo?.genres[6]},{" "}
            {animes?.anime?.moreInfo?.genres[7]}
          </p>
          <p>
            <span className=" text-base font-semibold">Studios: </span>
            {animes?.anime?.moreInfo?.studios}
          </p>
          <p>
            <span className=" text-base font-semibold">Producers: </span>
            {animes?.anime?.moreInfo?.producers[0]}
          </p>
        </div>
        <div className="h-[100vh] w-[100vw] my-10 pr-10">
          <div className="h-10">
            <h1 className="text-[#ffdd95] font-semibold text-2xl leading-[1.3]">
              Related Animes
            </h1>
          </div>
          <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {/* {ANIMES.relatedAnimes.map((item, index) => (
              <AnimeCard key={item.id} anime={item} index={index} />
            ))} */}
            {animes?.relatedAnimes?.map((item, index) => (
              <AnimeCard key={item.id} anime={item} index={index} />
            ))}
          </section>
        </div>
        <div className="h-[100vh] w-[100vw] mt-[26rem] pr-10">
          <div className="h-10">
            <h1 className="text-[#ffdd95] font-semibold text-2xl leading-[1.3]">
              Recommended for you
            </h1>
          </div>
          <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-[100vw]">
            {/* {ANIMES.recommendedAnimes.map((item, index) => (
              <AnimeCard key={item.id} anime={item} index={index} />
            ))} */}
            {animes?.recommendedAnimes?.map((item, index) => (
              <AnimeCard key={item.id} anime={item} index={index} />
            ))}
          </section>
        </div>
        <div className="mt-[97rem] mb-10 h-[100vh] w-full">
          <div className="h-10 my-2">
            <h1 className="text-[#ffdd95] font-semibold text-2xl leading-[1.3]">
              Recommended for you
            </h1>
          </div>
          <div className="w-full h-[100vh] bg-slate-500 ">
            {animes?.mostPopularAnimes?.map((anime, index) => {
              return (
                <div
                  key={index}
                  className="h-28 w-full my-1 border-b-2 border-white border-dashed"
                >
                  <div className="h-full w-full p-2 bg-slate-500 flex items-center justify-between">
                    <div className="h-full w-[5rem] bg-red-50 rounded">
                      <img
                        src={anime?.poster}
                        alt="Anime pic"
                        className="h-full w-full object-cover aspect-video"
                      />
                    </div>
                    <div className="h-full w-[92%] flex items-center justify-between">
                      <div className="w-[80%] h-full text-white flex flex-col">
                        <h2 className=" font-medium text-lg">{anime?.name}</h2>
                        <div className="flex gap-2">
                          <div
                            className="h-7 w-14 flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1"
                          >
                            <BsFillBadgeCcFill className="object-contain" />
                            <h1 className=" font-bold text-center">
                              {anime?.episodes?.sub}
                            </h1>
                          </div>
                          <div
                            className="h-7 w-14 flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1"
                          >
                            <CiMicrophoneOn className="object-contain" />
                            <h1 className=" font-bold text-center">
                              {anime?.episodes?.dub}
                            </h1>
                          </div>
                          <span className="py-2"> {anime?.type}</span>
                        </div>
                      </div>
                      <div className="h-full w-10 flex justify-center items-center text-white">
                        <button className=" font-bold text-lg">
                          <IoAddOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="h-28 w-full my-1">
              <div className="h-full w-full p-2 bg-slate-500 flex items-center justify-between">
                <div className="h-full w-[5rem] bg-red-50 rounded">
                  <img
                    src={ANIMES.mostPopularAnimes[0].poster}
                    alt="Anime pic"
                    className="h-full w-full object-cover aspect-video"
                  />
                </div>
                <div className="h-full w-[92%] flex items-center justify-between">
                  <div className="w-[25%] h-full text-white flex flex-col">
                    <h2 className=" font-medium text-lg">
                      {ANIMES.mostPopularAnimes[0].name}
                    </h2>
                    <div className="flex gap-2">
                      <div
                        className="h-7 w-14 flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1"
                      >
                        <BsFillBadgeCcFill className="object-contain" />
                        <h1 className=" font-bold text-center">
                          {ANIMES.mostPopularAnimes[0].episodes.sub}
                        </h1>
                      </div>
                      <div
                        className="h-7 w-14 flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1"
                      >
                        <CiMicrophoneOn className="object-contain" />
                        <h1 className=" font-bold text-center">
                          {ANIMES.mostPopularAnimes[0].episodes.dub}
                        </h1>
                      </div>
                      <span className="py-2">
                        {" "}
                        {ANIMES.mostPopularAnimes[0].type}
                      </span>
                    </div>
                  </div>
                  <div className="h-full w-10 bg-red-400 flex justify-center items-center text-white">
                    <button className=" font-bold text-lg">
                      <IoAddOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
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
