import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const HomeHeroSection = () => {
  return (
    <div className="hero h-[29rem] w-[100vw]">
      <div className="px-4 mx-16 ">
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
            <input type="text" placeholder="        Search anime ..." className="w-full h-full rounded-3xl" />
          </div>
          <div className=" w-12 h-12 bg-orange-300 rounded-full ml-3">
          <IoSearch className="text-black font-semibold text-2xl m-3" />
          </div>
        </div>
        <div className="w-[36rem] flex">
          <span className='text-sm font-medium tracking-wider text-white mr-1'>Top search:</span>
          <p>jnviesnovoenfroenervnweongnrqnirenvknvoneronvronfiernijneveribvibvinaoamapdqpwo  kwoejojwqojoqhwruiibvijr rqnvinwrofnrufqwmrknwiqifewiqnfew eifiunfwn</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
