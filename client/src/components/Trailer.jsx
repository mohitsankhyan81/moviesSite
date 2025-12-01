import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'

const Trailer = () => {
  const [currentTrailer] = useState(dummyTrailers[0])
  if (!currentTrailer) return null

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 bg-black'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailer</p>
      <div className='relative mt-6 bg-gray-900 p-4 rounded-lg'>
        <BlurCircle top='-100px' right='-100px'/>
<div className='w-full flex justify-center bg-gray-800'>
<ReactPlayer
  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
  controls
  playing
  width="100%"
  height="480px"
/>

</div>


      </div>
    </div>
  )
}

export default Trailer
