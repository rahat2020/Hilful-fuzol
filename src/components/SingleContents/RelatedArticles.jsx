import Link from "next/link";
import Image from "next/image";

const RelatedArticles = ({ articles }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="group"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src={article.image}
                alt={article.title}
                width={250}
                height={150}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
