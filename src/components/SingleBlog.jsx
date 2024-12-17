import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import SideBar from "./SideBar";
const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Single Blog Page
        </h2>
      </div>
      {/* Blog details find */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
        <div className="lg:w-3/4 mx-auto ">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">
              {title}
            </h2>
            <p className="mb-3 text-gray-600 ">
              <FaUser className="inline-flex items-center mr-2" />
              {author} | {published_date}
            </p>
            <p className="mb-3 text-gray-600">
              <MdAccessTime className="inline-flex items-center mr-2" />{" "}
              {reading_time}
            </p>
            <p className="text-base text-gray-500 mb-6">{content}</p>
            <div className="text-base text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                rerum quasi tenetur. Ullam quam modi odit? At, ratione rerum
                inventore beatae ipsam in. Totam est quisquam, saepe hic
                necessitatibus cum.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
