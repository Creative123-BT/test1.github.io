import React from "react";

const Channels = () => {
  return (
    <div
      className="flex flex-col items-center   text-white"
      style={{
        background: "linear-gradient(to top, #120013 30%, #2E0F29 100%)",
      }}
    >
      {/* Channels Button */}
      <button className="border-2 rounded-full border-purple-500 text-white text-lg md:text-2xl font-semibold px-8 py-3 hover:bg-purple-500 hover:text-black transition duration-300 mb-6"  style={{ marginTop: "var(--margin-top-lg)" }}>
        Channels
      </button>

      <div className="max-w-8/12  mb-20" style={{ marginTop: "var(--margin-top-lg)" }}>
        {/* Custom Grid Layout */}
        <div className="grid grid-cols-3">
          <div>
            <img
              src="/channels/1.jpg"
              alt="Display Ads"
              className="object-cover w-full h-72"
            />
          </div>
          <div>
            <img
              src="/channels/2.png"
              alt="Video Ads"
              className="object-cover w-full  h-72"
            />
          </div>
          <div>
            <img
              src="/channels/3.png"
              alt="Social Media Ads"
              className="object-cover w-full  h-72"
            />
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div>
            <img
              src="/channels/4.png"
              alt="Search Engine Ads (PPC)"
              className="object-cover w-full  h-72"
            />
          </div>
          <div>
            <img
              src="/channels/5.png"
              alt="Native Ads"
              className="object-cover w-full  h-72"
            />
          </div>
          <div className="relative overflow-hidden">
            <video
              src="/channels/6.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end p-4 ">
              <span className="text-xl font-light text-white">
                Email & Newsletter Ads
              </span>
            </div>
          </div>
          <div className="">
            <img
              src="/channels/7.png"
              alt="Influencer & Affiliate Ads"
              className="object-cover w-full h-72  "
            />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="relative overflow-hidden">
            <video
              src="/channels/8.mp4"
              autoPlay
              loop
              muted
              className="w-full  object-cover h-72"
            />
            <div className="absolute inset-0 flex items-baseline p-4 ">
              <span className="text-xl font-light text-white">
                Audio & Podcast Ads
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <video
              src="/channels/9.mp4"
              autoPlay
              loop
              muted
              className="w-full  object-cover h-72"
            />
            <div className="absolute inset-0 flex items-start p-4 ">
              <span className="text-xl font-bold text-white">
                Connected TV (CTV) & OTT Ads
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden">
          
            <div className="absolute inset-0 flex items-start p-4 bg-gradient-to-t">
              <span className="text-xl font-light text-white">
                Digital Out-of-Home Ads
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
