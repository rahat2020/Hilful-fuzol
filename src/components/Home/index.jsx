"use client";
import Contents from "@/components/Home/Contents";
import HeaderSlider from "@/components/Home/HeaderSlider";
import Testimonials from "@/components/Home/Testimonials";

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
