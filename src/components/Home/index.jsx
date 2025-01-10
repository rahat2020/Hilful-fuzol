"use client";
import Testimonials from "@/components/home/Testimonials";
import Contents from "@/components/contents/Contents";
import HeaderSlider from "./HeaderSlider";

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
