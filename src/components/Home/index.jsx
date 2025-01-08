"use client";
import HeaderSlider from "@/components/home/HeaderSlider";
import Testimonials from "@/components/home/Testimonials";
import Contents from "@/components/contents/Contents";

const Homepage = () => {
  return (
    <div>
      <HeaderSlider />
      <Contents />
      <Testimonials />
    </div>
  );
};

export default Homepage;
