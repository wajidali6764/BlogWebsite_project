import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl lg:max-w-screen-xl md:max-w-full md:px-24 lg:px-4 ">
        <div className="">
          <div className="grid grid-cols-2 gap-5 lg:col-sapn-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Refrencese
                  </a>
                </li>
              </ul>
            </div>
            {/* category 2 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    eCommrence
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* category 3 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Poroject
                  </a>
                </li>
              </ul>
            </div>
            {/* category 4 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Information
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Fourns
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-700 hover:text-orange-500"
                  >
                    Poroject
                  </a>
                </li>
              </ul>
            </div>
            {/* Subscripition */}
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
              <p className="font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </p>
              <form className="mt-4 flex flex-col md:flex-row">
                <input
                  type="email"
                  name=""
                  id="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-e-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                praesentium quasi repudiandae, temporibus iusto, velit excepturi
                suscipit minus distinctio beatae corrupti dolores reprehenderit
                nemo, enim facere cum fuga provident a earum architecto aliquam!
                Earum aperiam nulla obcaecati voluptatibus excepturi ut, iure
                rerum placeat error aliquid nemo nesciunt qui in sit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">© Copyright 2023 | All Right</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 tarnisition-all duration-300 hover:text-orange-500 "
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="text-gray-500 tarnisition-all duration-300 hover:text-orange-500 "
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="text-gray-500 tarnisition-all duration-300 hover:text-orange-500 "
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
