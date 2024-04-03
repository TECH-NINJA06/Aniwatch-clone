"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import HomeNav from "../Components/HomeNav";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";

const page = () => {
  const [episode, setEpisode] = useState({});
  const [servers, setServers] = useState(null);
  const [animeData, setAnimeData] = useState(null);
  let [currentEpi, setCurrentEpi] = useState(1)
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const parts = id.split('?');

    const idPart = parts[0];
    function fromKebabCase(str) {
      if (!str) return '';
      return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    const kebabCaseString = idPart;
    const normalname = fromKebabCase(kebabCaseString);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const ep = searchParams.get("ep");
          const response = await axios.get(
            `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${id}?ep=${ep}`
          );
          const data = await response.data;
          setServers(data);
          console.log(`"watchPage2:" ${servers}`);

        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${id}?ep=${currentEpi}`
          );
          const data = await response.data;
          setServers(data);
          console.log(`"watchPage2:" ${servers}`);

        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, [currentEpi]);

    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(
            `https://api-aniwatch.onrender.com/anime/info?id=${id}`
          );
          const data = await response.data;
          setAnimeData(data);
          console.log(`"animePage:" ${animeData}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
    const description = `${animeData?.anime?.info?.description}`;

  return (
    <div>
      <HomeNav />
      <div className="pt-28 min-h-screen h-auto w-screen flex justify-between items-center px-5">
        <div className="h-full w-[75%] bg-white px-5">
          <h1>{normalname}</h1>
        </div>
        <div className="min-h-full h-auto w-[20%] flex flex-col gap-5">
          <img src={animeData?.anime?.info?.poster} alt="" className="h-40 w-28"/>
          <h1 className="text-white font-semibold text-3xl">{animeData?.anime?.info?.name}</h1>
          <div className="h-10 w-full flex items-center justify-evenly">
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-white text-black my-2 rounded"
                >
                  <h1 className="text-center text-sm">
                    {/* {ANIMES.anime.info.stats.rating} */}
                    {animeData?.anime?.info?.stats?.rating}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-[#ffdd95] text-black my-2 rounded"
                >
                  <h1 className="text-center text-sm">
                    {/* {ANIMES.anime.info.stats.quality} */}
                    {animeData?.anime?.info?.stats?.quality}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-green-400 text-black my-2 rounded gap-1"
                >
                  <BsFillBadgeCcFill className="object-contain" />
                  <h1 className="text-center text-sm">
                    {/* {ANIMES.anime.info.stats.episodes.sub} */}
                    {animeData?.anime?.info?.stats?.episodes?.sub}
                  </h1>
                </div>
                <div
                  className="h-7 w-[3.5rem] flex justify-center items-center
             bg-red-300 text-black my-2 rounded gap-1"
                >
                  <CiMicrophoneOn className="object-contain" />
                  <h1 className="text-center text-sm">
                    {/* {ANIMES.anime.info.stats.episodes.dub} */}
                    {animeData?.anime?.info?.stats?.episodes?.dub}
                  </h1>
                </div>
          </div>
          <div className="w-full h-56 mt-10 text-white overflow-y-scroll">
            <p className="text-xs">
              {showFullText ? description : `${description.slice(0, 200)}`}{" "}
              <span onClick={toggleText} style={{ cursor: "pointer" }}>
                {showFullText ? " ...less" : " ...more"}
              </span>
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default page