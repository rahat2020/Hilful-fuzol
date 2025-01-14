"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { User, Calendar, MessageCircle, Heart, Share2 } from "react-feather";
import { blogs, categoryColorMap } from "@/data/blogsData";
import useScreenSize from "@/hooks/useScreenSize";
import { getPlayerDimensions } from "@/utils/appHelpers";
import ComponentHeader from "@/UI/ComponentHeader";

const Contents = () => {
  const screenSize = useScreenSize();
  const { width, height } = getPlayerDimensions(screenSize);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [hasWindow]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6">
        <ComponentHeader
          title="Our Programms"
          titleClasses="md:text-40 text-32"
          customStyles="text-48 font-bold text-start mb-8 text-brand"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const {
              id,
              category,
              title,
              date,
              description,
              author,
              comments,
              likes,
              shares,
              image,
              type,
              videoLink,
            } = blog || {};
            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative">
                  {type === "video" ? (
                    hasWindow && (
                      <ReactPlayer
                        url={videoLink}
                        controls
                        light
                        width={width}
                        height={height}
                      />
                    )
                  ) : (
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={220}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      priority
                    />
                  )}

                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${
                      categoryColorMap[category] || "bg-black text-white"
                    }`}
                  >
                    {category}
                  </span>
                </div>
                <Link href={`/contents/${id}`}>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex gap-3 text-gray-600 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={16} className="text-blue-600" />
                        <span>{author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{date}</span>
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 transition-colors hover:text-blue-500">
                      {title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
                      {description}
                    </p>
                    <div className="flex items-center justify-between mt-5 text-gray-800 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={16} />
                          <span>{comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={16} />
                          <span>{likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
