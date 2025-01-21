"use client";

import Article from "./Article";
import AuthorBio from "./AuthorBio";
import CommentSection from "./CommentSection";
import RelatedArticles from "./RelatedArticles";
import ShareButtons from "./ShareButtons";

const SingleArticleContents = ({ params }) => {
  // In a real application, you would fetch the article data based on the slug
  const article = {
    title: "The Future of Web Development: Trends to Watch in 2023",
    author: {
      name: "MD. Ramzan",
      bio: "Jane is a senior web developer with over 10 years of experience in creating cutting-edge web applications.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2025-01-15",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move further into 2023, several trends are shaping the future of web development. Let's explore some of the most significant ones:</p>

      <h2>1. Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain traction, offering a seamless, app-like experience on the web. They provide offline functionality, push notifications, and fast loading times, bridging the gap between web and native applications.</p>

      <h2>2. Artificial Intelligence and Machine Learning</h2>
      <p>AI and ML are increasingly being integrated into web applications, enabling more personalized user experiences, intelligent chatbots, and predictive analytics.</p>

      <h2>3. WebAssembly</h2>
      <p>WebAssembly is opening up new possibilities for high-performance web applications, allowing developers to run complex computations in the browser at near-native speed.</p>

      <h2>4. Serverless Architecture</h2>
      <p>Serverless computing is simplifying backend development and deployment, allowing developers to focus on writing code without worrying about server management.</p>

      <h2>5. API-first Development</h2>
      <p>With the rise of microservices and headless CMS, API-first development is becoming increasingly popular, enabling more flexible and scalable web applications.</p>
    `,
    slug: params,
    readingTime: "5 min read",
    tags: ["Mahfil", "Hilful fuzul", "Program", "Outing"],
  };

  const relatedArticles = [
    {
      id: 1,
      title: "Getting Started with React: A Beginner's Guide",
      slug: "getting-started-with-react",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques for Modern Layouts",
      slug: "advanced-css-techniques",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      title: "The Power of JavaScript: From Basics to Advanced Concepts",
      slug: "the-power-of-javascript",
      image: "/placeholder.svg?height=150&width=250",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Article article={article} />
      <div className="mt-8">
        <AuthorBio author={article.author} />
      </div>
      <div className="mt-8">
        <ShareButtons articleSlug={article.slug} />
      </div>
      <div className="mt-12">
        <RelatedArticles articles={relatedArticles} />
      </div>
      <div className="mt-12">
        <CommentSection articleSlug={article.slug} />
      </div>
    </div>
  );
};

export default SingleArticleContents;
