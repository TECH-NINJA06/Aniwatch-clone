"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import {SUGGESTIONS} from '../utils/data.example';

const HomeNav = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [kebabQuery, setKebabQuery] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // setTimeout(() = > {
        // const response = await axios.get(`https://api-aniwatch.onrender.com/anime/search/suggest?q=${kebabQuery}`);
        // const data = await response.data;
        // setSuggestions(data);
        // console.log(suggestions);})
        const response = await axios.get(
          `https://api-aniwatch.onrender.com/anime/search/suggest?q=${kebabCaseString}&limit=3`
        );
        const data = await response.data;
        setSuggestions(data);
        console.log(suggestions);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  // useEffect(() => {
  //   setSuggestions(SUGGESTIONS);
  // }, [query])
  

  const handleSearch = async () => {
    setKebabQuery(kebabCaseString);
    router.push(`/search?keyword=${kebabCaseString}`);
    console.log(kebabCaseString);
  };

  function toKebabCase(str) {
    return str.replace(/\s+/g, "-").toLowerCase();
  }
  const userInput = query;
  const kebabCaseString = toKebabCase(userInput);

  // const searchClick = () => {
  //   const kebabName = suggestions?.name.replace(/\s+/g, '-');
  //     router.push(`/anime?id=${kebabName}`)
  // }


  return (
    <div className="h-[70px] w-[100vw] bg-[#242428] px-3 z-50 fixed homenav">
      <div className="flex h-full w-full justify-between">
        <div className="float-left w-[36%] flex justify-between">
          <div className="w-[31%] h-full flex justify-center items-center">
            <Link href="/home">
              <img src=".././HomeLogo.png" alt="Aniwatch" className="py-3" />
            </Link>
          </div>
          <div className="bg-[#242428] w-[65%] h-full py-4 rounded-b-md">
            <div className="h-full w-full bg-white flex items-center">
              <input
                type="text"
                className="w-[75%] border-none h-full"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                onClick={()=>{
                  setDropdown(true)
                }}
                onBlur={()=>{
                  setDropdown(false);
                }}
              />
              <button onClick={handleSearch} className="w-[10%]">
                <IoMdSearch className="text-black text-xl font-bold ml-1" />
              </button>
              <button className="w-[15%] h-[75%] mr-2 bg-gray-400 rounded-sm text-white flex justify-center items-center text-sm">
                Filter
              </button>
            </div>
            <div className="h-[260px] w-full">
              {suggestions?.suggestions?.map((suggestion, index) => {
                return (
                <div className="" key={index} onClick={handleSearch}>
                  <div className="h-[70px] w-full bg-[#242428] border-slate-700 border-dashed border-2 flex justify-between items-center">
                    <div className="justify-center items-center flex px-2">
                      <img
                        src={suggestion?.poster}
                        alt="anime img"
                        className="h-[90%] w-full overflow-hidden"
                      />
                    </div>
                    <div className=" min-w-[80%] h-full p-1">
                      <div className="h-4">
                        <h1 className="text-white font-medium text-base">
                          {suggestion?.name}
                        </h1>
                      </div>
                      <div>
                        <p>{suggestion?.jname}</p>
                      </div>

                      <div className="flex gap-2">
                        <p>{suggestion?.moreInfo[0]}</p>
                        <p>{suggestion?.moreInfo[1]}</p>
                        <p>{suggestion?.moreInfo[2]}</p>
                      </div>
                    </div>
                  </div>
                 
                </div>
                )
              })}
               <div className={`h-[50px] w-full ${dropdown?"flex":"hidden"}`} >
                    <button
                      className="h-full w-full bg-[#ffdd95] rounded-b-md text-black text-base font-semibold"
                      onClick={handleSearch}
                    >
                      See All Results
                    </button>
                  </div>

              {/* <div className="h-[70px] w-full bg-slate-400 border-slate-700 border-dashed border-2 flex justify-between items-center">
              <div className="justify-center items-center flex px-2">
                <img src=".././next.svg" alt="anime img" className="h-[90%] w-full" />
              </div>
              <div className="bg-red-400 min-w-[80%] h-full p-1">
                <div className="h-4">
                  <h1 className="text-white font-medium text-base">Attack on Titan</h1>
                </div>
                <div>
                  <p>Shingou wa Sasageyou</p>
                </div>
               
                <div className="flex gap-2">
                <p>Hello,2020</p>
                <p>TV</p>
                <p>23min</p>
                </div>
              </div>
              </div>
              <div className="h-[70px] w-full bg-slate-400 border-slate-700 border-dashed border-2 flex justify-between items-center">
              <div className="justify-center items-center flex px-2">
                <img src=".././next.svg" alt="anime img" className="h-[90%] w-full" />
              </div>
              <div className="bg-red-400 min-w-[80%] h-full p-1">
                <div className="h-4">
                  <h1 className="text-white font-medium text-base">Attack on Titan</h1>
                </div>
                <div>
                  <p>Shingou wa Sasageyou</p>
                </div>
               
                <div className="flex gap-2">
                <p>Hello,2020</p>
                <p>TV</p>
                <p>23min</p>
                </div>
              </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between float-right h-auto w-[7.5rem]">
          <div></div>
          <div className=" bg-[#ffdd95] py-4 my-4 rounded cursor-pointer w-[84.6px] h-[40px] text-center justify-center items-center flex">
            <Link
              href="/login"
              className="bg-[#ffdd95] ml-4 pr-[13px] pl-0 text-black inline-block font-bold text-base text-center py-0"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
