'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Search from "../Components/Search"



const HomeNav = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [kebabQuery, setKebabQuery] = useState("");

  const handleSearch = async () => {
    setKebabQuery(kebabCaseString);
    console.log(kebabCaseString);
  }

  function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
  }
  const userInput = query;
  const kebabCaseString = toKebabCase(userInput);
  return (
    <div className='h-[70px] w-[100vw] justify-between flex bg-[#242428] px-3 z-50 fixed homenav'>
        <div className='float-left w-[36%] flex justify-between'>
          <div className='w-[31%] bg-black h-full'>

          </div>
          <div className='bg-[#242428] w-[65%] h-full py-4'>
            <Search />
          </div>

        </div>
        <div className='flex justify-between float-right bg-slate-50 h-auto w-[7.5rem]'>
            <div>

            </div>
            <div className=' bg-[#ffdd95] py-4 my-4 rounded cursor-pointer w-[84.6px] h-[40px] text-center justify-center items-center flex'>  
                    <Link href="/login" className='bg-[#ffdd95] ml-4 pr-[13px] pl-0 text-black inline-block font-bold text-base text-center py-0'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeNav