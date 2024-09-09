import React from 'react'
import Image from 'next/image'

const MobileAppsSection = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-between gap-4 px-14 py-10 md:flex-row md:px-28'>
            <div className='flex flex-col gap-7'>
                <h3 className="text-3xl font-bold text-zinc-950 xl:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>Download Our<br/>User Application</h3>
                <div className='flex flex-row gap-3'>
                    <Image src="/images/applebutton.png" width={100} height={100} alt="app store icon" />
                    <Image src="/images/googleplaybutton.png" width={100} height={100} alt="play store icon" />
                </div>
            </div>
            <div>
                <Image src="/images/mobileapppic.png" width={700} height={700} alt="mobile image" className='md:h-[250px] md:w-[400px] lg:h-[400px] lg:w-[600px] xl:h-[600px] xl:w-[800px]' />
            </div>
            <div className='flex flex-col gap-7'>
                <h3 className="text-right text-3xl font-bold text-zinc-950 xl:text-5xl" style={{ fontFamily: 'SF Pro Display' }}>Download Our<br/>Helper Application</h3>
                <div className='flex flex-row justify-end gap-3'>
                    <Image src="/images/applebutton.png" width={100} height={100} alt="app store icon" />
                    <Image src="/images/googleplaybutton.png" width={100} height={100} alt="play store icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileAppsSection