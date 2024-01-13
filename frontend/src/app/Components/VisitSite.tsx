import Link from 'next/link'
import React from 'react'

const VisitSite = () => {
  return (
    <div className=' h-14 w-[86vw] rounded-b-3xl mb-10 bg-[#ffdd95] mx-[7vw] items-center justify-center text-center py-3'>
        <div>
            <Link href="/home" className='text-black font-semibold text-center'>Visit Full Site</Link>
        </div>
    </div>
  )
}

export default VisitSite