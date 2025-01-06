"use client";
import MemberCard from "./MemberCard";

const teamMembers = [
  {
    name: "Elias Sheikh",
    role: "Advisor",
    image: "/team/member1.jpg",
  },
  {
    name: "Samiul Islam",
    role: "Advisor",
    image: "/team/member2.jpg",
  },
  {
    name: "Muhammad Shahnewaz",
    role: "Advisor",
    image: "/team/member3.jpg",
  },
];

const MemberComponents = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-4xl font-bold text-start mb-12">
        Advisor Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberComponents;
