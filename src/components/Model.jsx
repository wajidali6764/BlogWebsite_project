import React from "react";

const Model = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="model-container">
        <div className="bg-indigo-700 text-center p-5 lg:w-[500px] h-[60vh] rounded shadow-md">
          {/* Model Cotenet */}
          <h2 className="text-xl font-semibold  mt-6 mb-5 uppercase">
            Please Login Here
          </h2>
          <form action="px-5">
            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eaxple@mail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shodow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shodow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
                Login
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
