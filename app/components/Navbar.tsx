'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
  return (
    <>
        <nav className="flex items-center justify-between bg-[#070707] p-4 sm:p-8 lg:px-12 lg:py-8 xl:px-14 xl:py-8">
            <Image
                src="./helpdesk logo white.svg"
                width={234}
                height={58}
                alt="logo"
                className='h-[40px] w-[150px] md:h-[50px] md:w-[200px] xl:h-[58px] xl:w-[234px]'
            />
            <div className='hidden lg:flex'>
                <div className="flex justify-between text-white lg:gap-6 lg:text-base xl:gap-10 xl:text-lg" style={{ fontFamily: 'SF Pro Display', fontWeight: '500'}}>
                    <div>Home</div>
                    <div>Services</div>
                    <div>About Us</div>
                    <div>Pricing</div>
                    <div>FAQs</div>
                    <div>Contact Us</div>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-2 text-white lg:text-sm xl:text-base' style={{ fontFamily: 'SF Pro Display', fontWeight: '500'}}>
                        <Image src={'/icons/language.svg'} width={24} height={24} alt="language icon"/>
                        EN
                    </div>
                    <button className='bg-transparent text-white lg:text-base xl:text-xl' style={{ fontFamily: 'SF Pro Display', fontWeight: 'bold'}}>Log in</button>
                    <button className='rounded-full bg-white px-6 py-2 text-[#070707] lg:text-base xl:text-xl' style={{ fontFamily: 'SF Pro Display', fontWeight: 'bold'}}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className='visible lg:hidden'>
                <button className='bg-transparent' onClick={handleClick}>
                    <Image src={'/icons/menu.svg'} width={24} height={24} alt="menu icon" className='size-[24px] md:size-[32px]'/>
                </button>
            </div>
            <div className={open ? 'visible' : 'hidden'}>
                <aside className='z-10 h-full w-[200px] bg-[#070707] text-white'>
                    nef
                </aside>
            </div>
        </nav>
    </>
  )
}

export default Navbar