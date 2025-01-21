import React from "react";
import Image from "next/image";
import { membersData } from "@/data/membersData";
import ComponentHeader from "@/UI/ComponentHeader";

const AboutTeam = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ComponentHeader
          title="Meet Our Leadership Team"
          desc="What Our well-wishers says"
          titleClasses="md:text-40 text-32"
          customStyles="text-48 font-bold text-start mb-8 text-brand"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {membersData?.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            >
              <Image
                src={member.picture}
                alt={member.name}
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
