import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const VisitSite = () => {
  return (
    <div className=" h-14 w-[86vw] rounded-b-3xl mb-10 bg-[#ffdd95] mx-[7vw] flex items-center justify-center text-center py-3 gap-3">
      <div>
        <Link href="/home" className="text-black font-semibold text-center">
          Visit Full Site
        </Link>
      </div>
      <Link href="/home">
        <div className="w-4 h-4 rounded-full bg-black">
          <FaArrowRight className="text-[#ffdd95] font-extrabold" />
        </div>
      </Link>
    </div>
  );
};

export default VisitSite;
