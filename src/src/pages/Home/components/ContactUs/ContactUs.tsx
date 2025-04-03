import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden" style={{ marginTop: "var(--margin-top-lg)" }}>
      {/* Background Image */}
      <Image
        src="/images/BGImage.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />

      {/* Overlay with Exact Gradient Match */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,#17002C_100%)] opacity-90"></div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col md:flex-row items-center justify-between w-full   text-white">
        {/* Media Kit Section */}
        <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0  items-center flex flex-col justify-center">
          <h3 className="text-lg font-semibold">Media-Kit</h3>
          <p className="text-sm mt-2">
            Download free media-kit & get to know us better
          </p>
          <button className="mt-4 px-8 py-3 border-2 border-[#9120E4] text-white rounded-full hover:bg-purple-400 hover:text-white transition">
            Download Now
          </button>
        </div>

        {/* Contact Us Section */}
        <div className="text-center md:text-left w-full md:w-1/2 items-center flex flex-col justify-center">
          <h3 className="text-lg font-semibold">
            Get in touch with us. We're here to assist you
          </h3>
          <p className="text-sm mt-2">
            Want to work with us? Got a project you want us to handle?
          </p>
          <button className="mt-4 px-8 py-3 border-2 border-[#9120E4] text-white rounded-full hover:bg-purple-400 hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
