'use client'

import React from 'react'
import { Drawer, Sidebar } from 'flowbite-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
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
                    <Link href={'/'}>Home</Link>
                    <Link href={'/services'}>Services</Link>
                    <Link href={'/aboutus'}>About Us</Link>
                    <Link href={'/pricing'}>Pricing</Link>
                    <Link href={'/faqs'}>FAQs</Link>
                    <Link href={'/contactus'}>Contact Us</Link>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-2 text-white lg:text-sm xl:text-base' style={{ fontFamily: 'SF Pro Display', fontWeight: '500'}}>
                        <Image src={'/icons/language.svg'} width={24} height={24} alt="language icon"/>
                        EN
                    </div>
                    <Link href={'/login'} className='bg-transparent text-white lg:text-base xl:text-xl' style={{ fontFamily: 'SF Pro Display', fontWeight: 'bold'}}>Log in</Link>
                    <button className='rounded-full bg-white px-6 py-2 text-[#070707] lg:text-base xl:text-xl' style={{ fontFamily: 'SF Pro Display', fontWeight: 'bold'}}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className='visible lg:hidden'>
                <button className='bg-transparent' onClick={handleOpen}>
                    <Image src={'/icons/menu.svg'} width={24} height={24} alt="menu icon" className='size-[24px] md:size-[32px]'/>
                </button>
            </div>
            <Drawer open={open} onClose={handleClose} position='right' className='w-52 overflow-x-hidden md:w-64'>
                <Drawer.Header title="Help Desk" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar className='[&>div]:bg-transparent [&>div]:p-0'>
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href={'/'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    Home
                                </Sidebar.Item>
                                <Sidebar.Item href={'/services'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    Services
                                </Sidebar.Item>
                                <Sidebar.Item href={'/aboutus'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    About Us
                                </Sidebar.Item>
                                <Sidebar.Item href={'/pricing'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    Pricing
                                </Sidebar.Item>
                                <Sidebar.Item href={'/faqs'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    FAQs
                                </Sidebar.Item>
                                <Sidebar.Item href={'/contactus'} className='bg-transparent text-xl font-semibold text-[#070707]'>
                                    Contact Us
                                </Sidebar.Item>
                                <Sidebar.Item href={'/login'} className='bg-transparent text-xl font-medium text-[#070707] hover:underline'>
                                    Log in
                                </Sidebar.Item>
                                <Sidebar.Item>
                                    <button className='rounded-full bg-[#070707] px-6 py-2 text-white' style={{ fontFamily: 'SF Pro Display', fontWeight: 'bold'}}>
                                        Sign Up
                                    </button>    
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </nav>
    </>
  )
}

export default Navbar