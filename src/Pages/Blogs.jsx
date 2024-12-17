import React from "react";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Blogs Page
        </h2>
      </div>
      {/* {all Show Blogs container} */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
