import Images from "@/components/ui/Images/Images";
import React from "react";

const imageSources = [
  "/icons/platforms/1.png",
  "/icons/platforms/2.png",
  "/icons/platforms/3.png",
  "/icons/platforms/4.png",
  "/icons/platforms/5.png",
  "/icons/platforms/6.png",
  "/icons/platforms/7.png",
  "/icons/platforms/8.png",
  "/icons/platforms/9.png",
  "/icons/platforms/10.png",
  "/icons/platforms/11.png",
  "/icons/platforms/12.png",
  "/icons/platforms/13.png",
  "/icons/platforms/14.png",
  "/icons/platforms/15.png",
  "/icons/platforms/16.png",
  "/icons/platforms/17.png",
  "/icons/platforms/18.png",
  "/icons/platforms/19.png",
  "/icons/platforms/20.png",
  "/icons/platforms/21.png",
  "/icons/platforms/22.png",
  "/icons/platforms/23.png",
  "/icons/platforms/24.png",
  "/icons/platforms/25.png",
];

const Content = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b px-6"  style={{ marginTop: "var(--margin-top-lg)" }}>
      <div className="bg-white p-8 rounded-3xl shadow-lg  w-full mx-72">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {imageSources.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <Images src={src} width={150} height={50} alt={`img${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
