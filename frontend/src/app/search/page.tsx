'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParams = useSearchParams()
 
  const keyword = searchParams.get('keyword')
  function fromKebabCase(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  const kebabCaseString = keyword;
  const normalText = fromKebabCase(kebabCaseString);
  

  return (
    <div>
        Hello World amigo: {normalText}
    </div>
  )
}

export default page