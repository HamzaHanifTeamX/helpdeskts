import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className='flex w-full flex-col bg-[#070707] px-14 py-10 md:px-14 lg:px-28'>
            <div className='mb-20 flex w-full flex-col items-center justify-between gap-5 md:flex-row'>
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>Home</div>
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>About Us</div>
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>Services</div>
                <Image src="/helpdesk logo white.svg" width={200} height={200} alt="logo" />
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>FAQ&apos;s</div>
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>Tutorials</div>
                <div className="text-center text-xl font-medium text-white xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>Contact Us</div>
            </div>
            <div className='mb-12 flex flex-col items-center justify-center gap-6'>
                <div className="text-center text-xl font-medium leading-relaxed text-white" style={{ fontFamily: 'SF Pro Display' }}>Subscribe to our newsletter</div>
                <div className='flex w-auto flex-row items-center justify-between rounded-full border border-gray-300 md:w-96'>
                    <input type="email" className="border-none bg-transparent p-3 text-white placeholder:text-white focus:border-0 focus:border-none focus:outline-none focus:outline-0 focus:ring-0" placeholder="Enter your email address" />
                    <button className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-center text-xl font-medium leading-relaxed text-slate-900" style={{ fontFamily: 'SF Pro Display' }}>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='h-px w-full border border-neutral-900'></div>
            <div className='flex flex-col items-center justify-center py-8'>
                <div className="text-center text-2xl font-normal text-white" style={{ fontFamily: 'SF Pro Display' }}>© Copyright 2024 Helpdesk. All Rights Reserved</div>    
            </div>
        </div>
    </div>
  )
}

export default Footer