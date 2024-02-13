'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io"

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [kebabQuery, setKebabQuery] = useState("");

  const handleSearch = async () => {
    setKebabQuery(kebabCaseString);
    router.push(`/search?keyword=${kebabCaseString}`)
    console.log(kebabCaseString);
  }

  function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
  }
  
  const userInput = query;
  const kebabCaseString = toKebabCase(userInput);
  return (
    <div className='h-full w-full bg-white flex items-center'>
        <input type='text' className='w-[75%] border-none h-full' onChange={(e)=>{
            setQuery(e.target.value);
            }}  
        />
        <button onClick={handleSearch} className='w-[10%]'>
            <IoMdSearch className="text-black text-xl font-bold ml-1" />
        </button>
        <button className='w-[15%] h-[75%] mr-2 bg-gray-400 rounded-sm text-white flex justify-center items-center text-sm'>
            Filter
        </button>
    </div>
  )
}

export default Search