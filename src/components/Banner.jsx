import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white to our Blogwhite text-center">
        <h1 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Welcome to our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          perferendis vel ipsa odit eaque, optio deleniti dolor soluta ad cum
          consequatur voluptates explicabo.
        </p>
        <div>
          <Link
            to="/"
            className="font hover:text-orange-500 inline-flex items-center py-1"
          >
            Learn More <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
