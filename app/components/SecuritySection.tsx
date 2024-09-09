import React from 'react'
import Image from 'next/image'

const SecuritySection = () => {
  return (
    <div>
        <div className='flex flex-col justify-between gap-10 p-10 md:px-14 lg:flex-row lg:px-40 xl:px-64'>
            <div>
                <Image src={"/images/securityimage.png"} width={700} height={700} alt="security image" className='md:size-[500px] lg:h-[500px] lg:w-[700px] xl:h-[600px]' />
            </div>
            <div className='flex w-auto flex-col gap-3 lg:w-[600px] lg:gap-5'>
                <p className="text-left text-xl font-bold text-zinc-950 xl:text-2xl" style={{ fontFamily: 'SF Pro Display' }}>Secure Guard</p>
                <h3 className="text-left text-3xl font-bold leading-tight text-zinc-950 xl:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>Trust and Safety<br/>Features for Your<br/>Protection</h3>
                <div className="text-justify text-lg font-normal leading-loose text-neutral-600 xl:text-xl" style={{ fontFamily: 'SF Pro Text' }}>
                    Say goodbye to uncertainty and hello to clarity with our fixed-price services. Whether it&apos;s education, legal matters, finances, home maintenance.
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src={"/icons/securepaymenticon.svg"} width={50} height={50} alt="security payment icon" />
                            <div className='h-8 w-0.5 bg-gradient-to-b from-[#070707] to-white'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Secure Payments</p>
                            <p className="text-base font-normal leading-normal text-neutral-600" style={{ fontFamily: 'SF Pro Text' }}>
                                Only release payment when the task is completed to your satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src={"/icons/ratingicon.svg"} width={50} height={50} alt="rating icon" />
                            <div className='h-8 w-0.5 bg-gradient-to-b from-[#070707] to-white'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Trusted Ratings and Reviews</p>
                            <p className="text-base font-normal leading-normal text-neutral-600" style={{ fontFamily: 'SF Pro Text' }}>
                                Pick the right person for the task based on real ratings and reviews from other users.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src={"/icons/insuranceicon.svg"} width={50} height={50} alt="insurance icon" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Insurance for Peace of Mind</p>
                            <p className="text-base font-normal leading-normal text-neutral-600" style={{ fontFamily: 'SF Pro Text' }}>
                                Only release payment when the task is completed to your satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecuritySection