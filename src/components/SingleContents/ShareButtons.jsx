"use client";

import { Facebook, Link, Linkedin, Twitter } from "react-feather";

const ShareButtons = ({ articleSlug }) => {
  const shareUrl = `https://yourdomain.com/article/${articleSlug}`;

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Share this article</h2>
      <div className="flex space-x-4">
        <button
          onClick={shareOnTwitter}
          className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"
        >
          <Twitter className="w-6 h-6" />
        </button>
        <button
          onClick={shareOnFacebook}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          <Facebook className="w-6 h-6" />
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
        >
          <Linkedin className="w-6 h-6" />
        </button>
        <button
          onClick={copyLink}
          className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700"
        >
          <Link className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
