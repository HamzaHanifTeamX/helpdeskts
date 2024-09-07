"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

const ServicesCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="px-10 py-16 md:px-32 md:py-28 lg:px-48 lg:py-28 xl:px-64 xl:py-36">
      <div>
        <h3
          className="text-xl font-bold text-zinc-950"
          style={{ fontFamily: "SF Pro Display" }}
        >
          Our Services
        </h3>
        <div className="mb-5 flex items-center justify-between">
          <h2
            className="text-4xl font-bold text-zinc-950"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Discover Expert Helpers
          </h2>
          <div className="flex items-center justify-between gap-2">
            <button
              className="flex size-12 items-center justify-center rounded-full border border-zinc-950 bg-white"
              onClick={handlePrev}
            >
              <ChevronLeft />
            </button>
            <button
              className="flex size-12 items-center justify-center rounded-full border border-zinc-950 bg-white"
              onClick={handleNext}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div>
          <Swiper
            loop
            slidesPerView={4}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/technology-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Technology</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/phones-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Phones</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/television-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>TVs</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/tablet-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Tablets</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/drive-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Drive</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/study-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Study</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center rounded-lg border border-[#EEEEEE] bg-white p-4">
                    <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <Image src={"/icons/translation-category.svg"} width={100} height={100} alt="technology icon" />
                        <p className="text-center text-xl font-bold text-zinc-950" style={{ fontFamily: 'SF Pro Display' }}>Translation</p>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
