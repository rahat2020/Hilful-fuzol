const MemberCard = ({ data }) => {
  const { name, role, picture } = data || {};
  return (
    <div className="flex flex-col items-center rounded-lg hover:scale-105 transition-transform duration-500 hover:shadow-lg">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-t-lg bg-gradient-to-b from-blue-50 to-white">
        <img
          src={picture}
          loading="lazy"
          width={200}
          height={200}
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
