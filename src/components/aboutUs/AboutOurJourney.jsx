import React from "react";
import { aboutJourneyData } from "@/data/aboutJourneyData";

const AboutOurJourney = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Journey
        </h2>
        <div className="space-y-12">
          {aboutJourneyData?.map((event, index) => (
            <div key={index} className="flex items-center">
              <div className="w-24 text-right">
                <span className="text-2xl font-bold text-blue-600">
                  {event.year}
                </span>
              </div>
              <div className="w-0.5 h-24 bg-blue-600 mx-8"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOurJourney;
