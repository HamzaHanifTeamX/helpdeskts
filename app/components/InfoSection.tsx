import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
  return (
    <div>
      <div className='flex flex-col justify-between gap-4 px-14 py-10 md:flex-row xl:px-64'>
        <div className='flex flex-col justify-center gap-4'>
            <p className="text-center text-2xl font-bold text-zinc-950 md:text-left" style={{ fontFamily: 'SF Pro Display' }}>
                Professional Assistance
            </p>
            <h2 className="text-center text-4xl font-bold text-zinc-950 md:text-left md:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>
                Get Expert Help<br/>Anytime, Anywhere
            </h2>
            <p className="size-auto text-center text-base font-normal leading-loose text-neutral-600 md:w-[300px] md:text-left md:text-xl xl:w-[600px]" style={{ fontFamily: 'SF Pro Text' }}>
                Our platform connects you with experts across various fields through audio calls, video calls, and screen sharing. Whether it&apos;s troubleshooting your devices.
            </p>
            <div className='flex justify-start'>
                <button className='rounded-3xl bg-[#070707] px-8 py-2 text-xl font-bold text-white transition-transform ease-linear hover:scale-110 focus:ring-4 focus:ring-black/75 focus:ring-offset-1' style={{ fontFamily: 'SF Pro Display'}}>
                    Need any help ?
                </button>    
            </div>
        </div>
        <div>
            <Image src={"/images/infoimage1.png"} width={500} height={600} alt="info image 1" />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-4 px-14 py-10 md:flex-row xl:px-64'>
        <div>
            <Image src={"/images/infoimage2.png"} width={500} height={600} alt="info image 2" />
        </div>
        <div className='flex flex-col justify-center gap-4'>
            <p className="text-center text-2xl font-bold text-zinc-950 md:text-left" style={{ fontFamily: 'SF Pro Display' }}>
                Help Others
            </p>
            <h2 className="text-center text-4xl font-bold text-zinc-950 md:text-left md:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>
                Share Your<br/>Expertise and Earn
            </h2>
            <p className="size-auto text-center text-base  font-normal leading-loose text-neutral-600 md:w-[300px] md:text-left md:text-xl xl:w-[600px]" style={{ fontFamily: 'SF Pro Text' }}>
                Join our platform to offer your professional assistance through audio calls, video calls, and screen sharing. Help users troubleshoot their devices, guide them through their studies
            </p>
            <div className='flex justify-start'>
                <button className='rounded-3xl bg-[#070707] px-8 py-2 text-xl font-bold text-white transition-transform ease-linear hover:scale-110 focus:ring-4 focus:ring-black/75 focus:ring-offset-1' style={{ fontFamily: 'SF Pro Display'}}>
                    Become a helper
                </button>    
            </div>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-4 px-14 py-10 md:flex-row xl:px-64'>
        <div className='flex flex-col justify-center gap-4'>
            <p className="text-center text-2xl font-bold  text-zinc-950 md:text-left" style={{ fontFamily: 'SF Pro Display' }}>
                Why Choose Us
            </p>
            <h2 className="text-center text-4xl font-bold  text-zinc-950 md:text-left md:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>
                Your Trusted Partner<br />in Every Need
            </h2>
            <p className="size-auto text-center text-base  font-normal leading-loose text-neutral-600 md:w-[300px] md:text-left md:text-xl xl:w-[600px]" style={{ fontFamily: 'SF Pro Text' }}>
                At our service, we understand that finding the right assistance can be overwhelming. That&apos;s why we stand out as your trusted partner, offering comprehensive support across various domains such as education.
            </p>
            <div className='flex justify-start'>
                <button className='rounded-3xl bg-[#070707] px-8 py-2 text-xl font-bold text-white transition-transform ease-linear hover:scale-110 focus:ring-4 focus:ring-black/75 focus:ring-offset-1' style={{ fontFamily: 'SF Pro Display'}}>
                    Learn more
                </button>    
            </div>
        </div>
        <div>
            <Image src={"/images/infoimage3.png"} width={500} height={600} alt="info image 3" />
        </div>
      </div>
    </div>
  )
}

export default InfoSection
