"use client";

import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HomeHeroSection = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [kebabQuery, setKebabQuery] = useState("");

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

  return (
    <div className="hero h-[29rem] w-[100vw]">
      <div className="px-4 mx-16 flex">
        <div className="w-[50%]">
          <div className=" h-[11rem] w-[770px] pt-24 pr-[550px]">
            <Link href="/home">
              <Image
                src="/HomeLogo.png"
                height={60}
                width={770}
                className=" h-[60px] w-[770px] mb-7"
                alt="logo"
              />
            </Link>
          </div>
          <div className="mt-3 flex">
            <div className="w-[36rem] h-12 mb-7">
              <input
                type="text"
                placeholder="        Search anime ..."
                className="w-full h-full rounded-3xl"
                onChange={(e)=>{
                  setQuery(e.target.value);
                  }}  
              />
            </div>
            <div className=" w-12 h-12 bg-[#ffdd95] rounded-full ml-3">
              <button onClick={handleSearch}>
                <IoSearch className="text-black font-semibold text-2xl m-3" />
              </button>
            </div>
          </div>
          <div className="w-[36rem] flex">
            <span className="text-sm font-medium tracking-wider text-white mr-1">
              Top search:
            </span>
            <p>
              <Link href="/search?keyword=One-Piece">One Piece</Link>, <Link href="/search?keyword=Solo-Leveling">Solo Leveling</Link>, <Link href="/search?keyword=Mashle:-Magic-and-Muscles-Season-2">Mashle: Magic and Muscles...</Link><br/>
              <Link href="/search?keyword=Jujutsu-Kaisen-2nd-Season">Jujutsu Kaisen 2nd Season</Link>, <Link href="/search?keyword=Mashle:-Magic-and-Muscles">Mashle: Magic and Muscles</Link>,<br/>
              <Link href="/search?keyword=Naruto:-Shippuden">Naruto: Shippuden</Link>, <Link href="/search?keyword=Overflow-(Uncencored)">Overflow (Uncencored)</Link>, <Link href="/search?keyword=Black-Clover">Black Clover</Link>,<br />
              <Link href="/search?keyword=Boruto:-Naruto-Next-Generations">Boruto: Naruto Next Genera...</Link>, <Link href="/search?keyword=Attack-on-Titan">Attack on Titan</Link>, ...
            </p>
          </div>
        </div>

        <div className="w-[50%] h-full">
          <img src="/anw-min.webp" className="w-full h-[27rem]" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
