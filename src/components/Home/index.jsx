"use client";
import Contents from "@/components/Home/Contents";
import HeaderSlider from "@/components/Home/HeaderSlider";
import Testimonials from "@/components/Home/Testimonials";
import Faqs from "../aboutUs/Faqs";

const Homepage = () => {
  return (
    <div>
      <HeaderSlider />
      <Contents />
      <Faqs />
      <Testimonials />
    </div>
  );
};

export default Homepage;
