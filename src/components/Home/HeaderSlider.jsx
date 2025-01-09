import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "react-feather";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import AppButton from "@/UI/AppButton";
import { slidersData } from "@/data/slidersData";

const HeaderSlider = () => {
  const handleCallback = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          468: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {slidersData?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex w-full h-[28rem] flex-col md:flex-row justify-between items-center px-8">
              <div className="flex bg-white flex-col justify-center px-8 py-4 w-[50%]">
                <h1 className="text-4xl font-bold text-brand">
                  {slide?.title}
                </h1>
                <p className="text-gray-600 py-4">{slide?.description}</p>
                <AppButton
                  withoutHrefBtn
                  text="View more"
                  icon={ArrowRight}
                  callback={() => handleCallback()}
                  customStyles="bg-brand w-[30%] text-white 500 px-2"
                />
              </div>

              <div className="mt-8 md:mt-0 w-[50%] flex justify-center">
                <Image
                  src={slide?.image || "/assets/program-1.jpg"}
                  alt="programs"
                  loading="lazy"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
