import React from "react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;

  return (
    <div className="my-4">
      <div className="card bg-gray-300 w-full">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
