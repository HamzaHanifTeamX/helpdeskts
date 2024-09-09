import React from 'react'

const VideoSection = () => {
    const videos = [
        {
            slogan: "How To Register on this Platform?",
            videolink: "https://www.youtube.com/embed/1g32IlH3SUs?si=s5IeKOGnQayMGbog"
        },
        {
            slogan: "How To Find Helpers on this Platform?",
            videolink: "https://www.youtube.com/embed/gwOVynGnDZA?si=puJRAxzBAG-SvEqt"
        },
        {
            slogan: "How To Make Payments on this Platform?",
            videolink: "https://www.youtube.com/embed/dJPVV0nFFWY?si=CX1iA7pHi8nRNeRs"
        }
    ]
  return (
    <div>
        <div className='flex flex-col justify-center gap-10 p-10 md:px-14 lg:px-40 xl:px-64'>
            <div className='flex flex-col justify-center gap-[26px]'>
                <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Video Tutorials</p>
                <h3 className="text-center text-4xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Dive Into The Platform</h3>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
                {videos.map((video, index) => (
                    <div className='flex h-80 w-72 flex-col gap-5 rounded-lg border bg-white p-3 shadow sm:w-96' key={index}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src={video.videolink} 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen 
                            className='size-full' 
                        />
                        <p className="text-center text-lg font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>{video.slogan}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='rounded-3xl bg-[#070707] px-8 py-2 text-xl font-bold text-white transition-transform ease-linear hover:scale-110 focus:ring-4 focus:ring-black/75 focus:ring-offset-1' style={{ fontFamily: 'SF Pro Display'}}>
                    View All
                </button>
            </div>
             
        </div>
    </div>
  )
}

export default VideoSection