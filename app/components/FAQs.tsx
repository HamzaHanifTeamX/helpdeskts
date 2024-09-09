"use client";

import React from 'react'
import { Accordion } from "flowbite-react";

const FAQs = () => {
    const faqs = [
        {
            question: "How do I get started with your platform?",
            answer: "To begin, simply sign up for an account on our website or mobile app. Once registered, you can submit your request for assistance in your desired category,and our system will guide you through the rest of the process seamlessly."
        },
        {
            question: "Can I trust the confidentiality of my information?",
            answer: "To begin, simply sign up for an account on our website or mobile app. Once registered, you can submit your request for assistance in your desired category,and our system will guide you through the rest of the process seamlessly."
        },
        {
            question: "What if I'm not satisfied with the service I receive?",
            answer: "To begin, simply sign up for an account on our website or mobile app. Once registered, you can submit your request for assistance in your desired category,and our system will guide you through the rest of the process seamlessly."
        },
        {
            question: "Are your helpers qualified and vetted?",
            answer: "To begin, simply sign up for an account on our website or mobile app. Once registered, you can submit your request for assistance in your desired category,and our system will guide you through the rest of the process seamlessly."
        }
    ]
  return (
    <div className='py-20'>
      <div className='flex flex-col items-center justify-center gap-[60px] p-10 md:px-14 lg:px-40 xl:px-64'>
        <div className='flex flex-col justify-center gap-[26px]'>
            <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>FAQ&apos;s</p>
            <h3 className="text-center text-4xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Your Questions Answered.</h3>
        </div>
        <div className='flex w-full flex-col gap-5'>
            <Accordion collapseAll>
                {faqs.map((faq, index) => (
                    <Accordion.Panel key={index}>
                        <Accordion.Title className="text-xl font-medium text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>{faq.question}</Accordion.Title>
                        <Accordion.Content>
                            <p className="text-base font-normal text-neutral-600" style={{ fontFamily: 'SF Pro Text' }}>{faq.answer}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQs
