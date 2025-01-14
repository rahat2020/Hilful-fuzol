import Image from "next/image";
import { Calendar, Clock, Tag, User } from "react-feather";

const Article = ({ article }) => {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex flex-wrap items-center text-gray-600 mb-4 gap-4">
        <div className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          <span>{article.author.name}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          <span>{article.readingTime}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center"
          >
            <Tag className="w-4 h-4 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <Image
        src={"/assets/program-1.jpg"}
        alt="content image"
        width={200}
        height={200}
        loading="lazy"
        className="w-[50%] h-48 object-fill rounded-lg mb-6"
      />
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </article>
  );
};

export default Article;
