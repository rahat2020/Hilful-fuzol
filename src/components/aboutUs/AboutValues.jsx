import React from "react";
import { aboutValues } from "@/data/aboutValues";

const AboutValues = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <h2>Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aboutValues?.map((value, index) => (
            <div key={index} className="text-center">
              <value.icon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-lg">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
