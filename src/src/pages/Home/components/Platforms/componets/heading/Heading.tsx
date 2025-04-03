import React from "react";

const Heading = () => {
  return (
    <div
      className="flex flex-col items-center  px-6 text-white"
     
     
    >
      {/* Platforms Button */}
      <button className="border-2 border-purple-500 text-white text-lg md:text-2xl font-semibold px-8 py-3 rounded-full hover:bg-purple-500 hover:text-black transition duration-300" style={{ marginTop: "var(--margin-top-lg)" }}>
        Platforms
      </button>

      {/* Description */}
      <p className="mt-6 text-gray-300 text-center max-w-2xl">
        We are integrated with all the leading 3rd party supply partners for
        advertising including
      </p>
    </div>
  );
};

export default Heading;
