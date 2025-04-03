import React from "react";
import Image from "next/image";
import Images from "@/components/ui/Images/Images";

const Footer = () => {
  return (
    <div className=" py-10 px-6 text-black">
      <div className="max-w-10/12 mx-auto flex justify-between ">
        {/* Left Section - Company Info */}
        <div className="w-4/12">
          <div className="flex items-center ">
            <Image src="/icons/BILLION.png" alt="Billiontags Logo" width={120} height={50} />
          </div>
          <p className="text-sm mt-3 ">
            We are Strategically Innovative, Technologically Advanced, Globally-Present, Socially Active,
            Truly Original and quite Ingenious. Billiontags is a creative factory! Connect with us
          </p>
          {/* Social Icons */}
          <div className="flex gap-1 mt-4 ">
            <Images src="/icons/social/1.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/2.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/3.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/4.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/5.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/6.png" width={30} height={30} alt="1"/>
            <Images src="/icons/social/7.png" width={30} height={30} alt="1"/>
            
          </div>
        </div>
        
        {/* Navigation Sections */}
        <div className="w-2/12">
          <h3 className="font-semibold">Home</h3>
          <ul className="text-sm mt-2 space-y-1 ">
            <li>Company</li>
            <li>Case Studies</li>
            <li>Self-Serve CRM</li>
            <li>Blogs & Insights</li>
            <li>Utility</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h3 className="font-semibold">Markets</h3>
          <ul className="text-sm mt-2 space-y-1 ">
            <li>United States</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>New Zealand</li>
            <li>Europe Middle</li>
            <li>East Asia-Pacific</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h3 className="font-semibold">Audiences</h3>
          <ul className="text-sm mt-2 space-y-1 ">
            <li>Ethnicities</li>
            <li>New Comers</li>
            <li>LGBTQIA+</li>
            <li>Niche</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h3 className="font-semibold">Services</h3>
          <ul className="text-sm mt-2 space-y-1 ">
            <li>Ethnocultural Strategy</li>
            <li>Diverse Audience Planning</li>
            <li>Creative Development</li>
            <li>Multi-lingual Transcreations</li>
            <li>Media Planning & Buying</li>
            <li>Campaign Trafficking</li>
            <li>Data-Driven Analytics</li>
            <li>Influencer Marketing</li>
            <li>Multicultural PR</li>
            <li>Production</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h3 className="font-semibold">Platforms</h3>
          <ul className="text-sm mt-2 space-y-1 ">
            <li>Programmatic Advertising</li>
            <li>Direct Media Buys</li>
            <li>Social Media Advertising</li>
          </ul>
          <div>
          <h3 className="font-semibold mt-5">Address</h3>
          <p className="text-sm mt-2 ">
            New Door No.782, Old No.427, 1st Floor, Anna Salai, Nandanam, Chennai, Tamil Nadu - 600 035.
          </p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;