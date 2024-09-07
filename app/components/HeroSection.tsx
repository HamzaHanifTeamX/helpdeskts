import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <>
      <div className="h-full bg-[#070707]">
        <div className='flex flex-col items-center px-1 pb-5 pt-10'>
          <h3 className="mb-10 text-center text-xl font-bold capitalize text-white sm:text-2xl" style={{ fontFamily: 'SF Pro Display'}}>Your personal solution hub</h3>
          <h1 className="mb-10 text-center text-5xl font-bold capitalize text-white sm:text-7xl" style={{ fontFamily: 'SF Pro Display'}}>The right talent for any task</h1>
          <p className="text-center text-base font-medium text-white sm:text-xl" style={{ fontFamily: 'SF Pro Text'}}>Connect with various professions via call, video call, or screen sharing.</p>
        </div>
        <div className='flex items-center justify-center px-4'>
          <Image src="/images/heroimage.png" width={500} height={600} alt="hero"/>
        </div>
      </div>
    </>
  )
}

export default HeroSection