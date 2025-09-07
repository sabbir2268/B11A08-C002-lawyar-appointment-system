import { Heading1 } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./Blog";

const Blogs = () => {
  const blogsData = useLoaderData();
  console.log(blogsData);
  return (
    <div>
      <h1 className="text-3xl text-center pt-5">Frequently asked question</h1>
      {blogsData.map((blog) => (
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
