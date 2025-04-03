'use client'
import Navbar from "@/layout/Navbar/Navbar";
import Home from "@/pages/Home/Home";
import Footer from "@/layout/Footer/Footer";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const ourServices = document.getElementById("our-services");
      if (ourServices) {
        const rect = ourServices.getBoundingClientRect();
        console.log("OurServices Position:", rect.top, rect.bottom);

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          setActive(true); 
        } else {
          setActive(false); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative h-screen w-full flex flex-col">
        <Navbar active={active} />
        <div className="flex-1 overflow-y-auto">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
