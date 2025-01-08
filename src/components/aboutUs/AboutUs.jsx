"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Award, Users, TrendingUp, Mail } from "react-feather";
import Faqs from "./Faqs";
import { membersData } from "@/data/membersData";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/assets/program-1.jpg"
          alt="Hero Image"
          layout="fill"
          loading="lazy"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Innovate. Create. Inspire.
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Shaping the future through technology and creativity
            </p>
            <Link
              href="#mission"
              className="bg-brand text-white-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 hover:text-green-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-white w-12 h-12 animate-bounce" />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            At TechInnovate, we're on a mission to harness the power of
            cutting-edge technology to solve real-world problems. We believe in
            creating solutions that not only meet the needs of today but
            anticipate the challenges of tomorrow. Our commitment to innovation,
            sustainability, and user-centric design drives everything we do.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, setting high standards and consistently delivering quality results.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and foster a collaborative environment that encourages diverse perspectives.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "We embrace change and continuously seek new ways to improve and innovate in our products and processes.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Our Leadership Team
          </h2>
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
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "Founded in a Garage",
                description:
                  "TechInnovate was born out of a passion for technology and a desire to make a difference.",
              },
              {
                year: "2013",
                title: "First Major Product Launch",
                description:
                  "Our flagship product revolutionized the industry and put us on the map.",
              },
              {
                year: "2016",
                title: "International Expansion",
                description:
                  "We opened our first international office, marking the beginning of our global journey.",
              },
              {
                year: "2019",
                title: "100 Million Users Milestone",
                description:
                  "We celebrated reaching 100 million active users across our product suite.",
              },
              {
                year: "2022",
                title: "Sustainability Initiative",
                description:
                  "Launched our company-wide sustainability program, committing to net-zero emissions by 2030.",
              },
            ].map((event, index) => (
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

      {/* FAQ Section */}
      <Faqs />
    </div>
  );
};

export default AboutUs;
