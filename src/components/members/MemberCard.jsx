const MemberCard = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gradient-to-b from-blue-50 to-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default MemberCard;
