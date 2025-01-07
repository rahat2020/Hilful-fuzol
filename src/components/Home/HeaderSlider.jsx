"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const HeaderSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="h-screen w-full">
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex w-full flex-col md:flex-row justify-between items-center px-8 bg-red">
              <div className="flex bg-white flex-col px-8 w-[50%]">
                <h1 className="text-4xl font-bold text-brand">
                  Welcome to Our Website
                </h1>
                <p className="text-gray-600 mt-4">
                  Discover our amazing content and services.
                </p>
                <button className="bg-brand text-white py-2 px-4 rounded">
                  Get Started
                </button>
              </div>

              <div className="mt-8 md:mt-0 w-[50%]">
                <Image
                  src="/assets/program-5.jpg"
                  alt="programs"
                  loading="lazy"
                  width={500}
                  height={500}
                  className=" object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HeaderSlider;
