
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


export interface AnimeProp {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string;
  episodes: {
    sub: number;
    dub: number;
  };
}

interface Prop {
  anime: AnimeProp;
}

// export const AnimeProp = {
//   id: '',
//   name: '',
//   poster: '',
//   duration: '',
//   type: '',
//   rating: '',
//   episodes: {
//     sub: 0,
//     dub: 0
//   }
// };

// export const Prop = {
//   anime: AnimeProp,
//   index: 0
// };


// const variants = {
//   hidden: { opacity: 0},
//   visible: { opacity: 1},

      //variants={variants}
// }

function AnimeCard({ anime }: Prop) {
  const router = useRouter();

  // const [search, setSearch] = useState({})
  // const [query, setQuery] = useState("")

  // useEffect(() => {
  //   ;(async () =>{
  //     const response = await axios.get(`https://api-aniwatch.onrender.com/anime/search?q=${keyword}`);
  //     const data = await response.data;
  //     setSearch(data)
  //     console.log(data)

  //    })()

  // }, [])
  // function toKebabCase(str) {
  //   return str.replace(/\s+/g, "-").toLowerCase();
  // }

  const searchClick = () => {
    // const kebabName = anime.name.toLowerCase().replace(/\s+/g, '-');
      router.push(`/anime?id=${anime.id}`)
  }

  return (
    <div className="max-w-sm rounded relative w-full my-5" onClick={searchClick}>
      <div className="relative w-full h-[54vh]">
      <img
      src={anime.poster}
      alt={anime.name}
      className="size-auto max-h-full max-w-full"
     />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.type}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <BsFillBadgeCcFill className='object-contain' />
            <p className="text-base text-white font-bold flex">
              {anime.episodes.sub}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CiMicrophoneOn className='object-contain' />
            <p className="text-base text-white font-bold flex">
              {anime.episodes.dub}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoTimeOutline className='object-contain' />
            <p className="text-base font-bold text-[#FFAD49]">{anime.duration}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard;
