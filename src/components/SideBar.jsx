import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popularBlog, setPopularBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlog(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 ">Latest Blogs</h3>
        <div>
          {popularBlog.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className=" tex-base gp-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* popular blog */}
      <div>
        <h3 className="text-2xl mt-20 font-semibold px-4 ">Popular Blogs</h3>
        <div>
          {popularBlog.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className=" tex-base gp-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
