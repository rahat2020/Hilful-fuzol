"use client";

import ComponentHeader from "@/UI/ComponentHeader";
import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
import AboutOurJourney from "./AboutOurJourney";
import AboutValues from "./AboutValues";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AboutHero />
      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="">
          <ComponentHeader
            title="Our Mission"
            titleClasses="md:text-40 text-32"
            customStyles="text-48 font-bold text-start mb-8 text-brand"
          />
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Hilful Fozul is a non-profit an Islmic sunni organization that is
            dedicated to helping the poor and needy people in the society.
          </p>
        </div>
      </section>
      {/* Values Section */}
      <AboutValues />
      {/* Team Section */}
      <AboutTeam />
      {/* Timeline Section */}
      <AboutOurJourney />
    </div>
  );
};

export default AboutUs;
