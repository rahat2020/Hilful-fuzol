import Image from "next/image";

const AuthorBio = ({ author }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      <Image
        src={author.avatar}
        alt={`${author.name}'s avatar`}
        width={100}
        height={100}
        className="rounded-full mr-6"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{author.name}</h2>
        <p className="text-gray-600">{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorBio;
