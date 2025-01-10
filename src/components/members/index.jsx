"use client";
import MemberCard from "@/components/members/MemberCard";
import { membersData } from "@/data/membersData";
import { getCategories } from "@/helpers";
import ComponentHeader from "@/UI/ComponentHeader";

const MemberComponents = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      {getCategories?.map(({ key, label }) => {
        const categoryMembers = membersData.filter(
          (member) => member.category === key
        );

        if (!categoryMembers.length) return null;

        return (
          <div key={key} className="mb-12">
            <ComponentHeader
              title={label}
              titleClasses="md:text-40 text-32"
              customStyles="text-48 font-bold text-start mb-8 text-brand"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {categoryMembers.map((member, index) => (
                <MemberCard key={index} data={member} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MemberComponents;
