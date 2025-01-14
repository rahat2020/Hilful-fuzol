"use client";

import { useState } from "react";
import { Send, User } from "react-feather";

const CommentSection = ({ articleSlug }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alice Johnson",
      content:
        "Great article! I especially liked the part about Progressive Web Apps.",
      date: "2023-05-16",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      author: "Bob Smith",
      content:
        "I learned a lot from this. Looking forward to more articles on AI and ML in web development.",
      date: "2023-05-17",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Anonymous", // In a real app, this would be the logged-in user
        content: newComment,
        date: new Date().toISOString().split("T")[0],
        avatar: "/placeholder.svg?height=50&width=50",
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <ul className="space-y-6 mb-8">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold">{comment.author}</h3>
                <span className="text-gray-600 text-sm">{comment.date}</span>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="flex items-center mb-4">
          <User className="w-12 h-12 text-gray-400 mr-4" />
          <h3 className="font-bold">Add a comment</h3>
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          rows="3"
          placeholder="Write your comment here..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Send className="w-5 h-5 mr-2" />
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
