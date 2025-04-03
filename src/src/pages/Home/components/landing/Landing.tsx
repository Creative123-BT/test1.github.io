import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-6">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/home.mp4"></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Replacing text with image */}
        <Image
          src="/icons/Heading.png"
          alt="Where Mainstream Meets Multicultural Excellence"
          width={600} // Adjust width as needed
          height={200} // Adjust height as needed
          className="mx-auto"
        />
      </div>
    </div>
  );
}
