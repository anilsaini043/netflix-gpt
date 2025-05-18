import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen aspect-video text-white pt-[18%] px-24 bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold opacity-80 tracking-wide'>{title}</h1>
        <p className='w-1/3 py-6 text-lg opacity-70 tracking-wide'>{overview}</p>
        <div className='flex gap-4'>
            <button className='bg-white hover:opacity-90 cursor-pointer px-6 py-3 text-black text-xl font-bold rounded-sm'>▶︎ Play</button>
            <button className='bg-gray-700 hover:opacity-90 cursor-pointer px-6 py-3 text-white text-xl font-bold rounded-sm hover:bg-opacity-50'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle