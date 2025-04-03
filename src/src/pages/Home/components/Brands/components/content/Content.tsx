import Images from "@/components/ui/Images/Images";
import React from "react";

const imageSources = Array.from({ length: 48 }, (_, i) => `/icons/brands/${i + 1}.png`);

const Content = () => {
  return (
    <div className="flex justify-center items-center min-h-screen b ">
      <div className="bg-white ">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10">
          {imageSources.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <Images src={src} width={90} height={50} alt={`img${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
