import React from 'react'

const SubscriptionPlan = () => {
    const subscriptionPlans = [
        {
            name: "Basic",
            price: 110,
            description: "Monthly Membership",
        },
        {
            name: "Pro",
            price: 255,
            description: "Monthly Membership",
        },
        {
            name: "Enterprise",
            price: 3900,
            description: "Monthly Membership",
        }
    ]
  return (
    <div className='py-16'>
      <div className='flex flex-col justify-center gap-[70px] p-10 md:px-14 lg:px-40 xl:px-64'>
        <div className='flex flex-col items-center justify-center gap-[26px]'>
            <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Subscription Plan</p>
            <p className="text-center text-4xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Access Expert Assistance</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
            {
                subscriptionPlans.map((plan, index) => (
                    <div className='flex h-80 w-72 md:w-96 flex-col justify-between rounded-lg border bg-white p-5 shadow' key={index}>
                        <div className='flex flex-col gap-3'>
                            <p className="text-2xl font-normal text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>{plan.name}</p>
                            <p className="text-5xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>{plan.price} AED</p>
                        <p className="text-xl font-normal text-neutral-600" style={{ fontFamily: 'SF Pro Text' }}>{plan.description}</p>
                        </div>
                        <div className='flex justify-start'>
                            <button className='rounded-3xl bg-[#070707] px-8 py-2 text-xl font-bold text-white transition-transform ease-linear hover:scale-110 focus:ring-4 focus:ring-black/75 focus:ring-offset-1' style={{ fontFamily: 'SF Pro Display'}}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                ))
            }
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

export default SubscriptionPlan
