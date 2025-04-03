"use client";
import Images from "@/components/ui/Images/Images";
import React from "react";



const Content = () => {
  return (
    <>
     <div className="flex justify-between"  style={{ marginTop: "var(--margin-top-lg)" }}>
      <Images src="/images/casestudies/1.png" width={300} height={300} alt="img1"/>
      <Images src="/images/casestudies/2.png" width={350} height={300} alt="img1"/>
      <Images src="/images/casestudies/3.png" width={350} height={300} alt="img1"/>
      <Images src="/images/casestudies/4.png" width={350} height={300} alt="img1"/>
      <Images src="/images/casestudies/5.png" width={220} height={300} alt="img1"/>
    </div>
    <div className="flex justify-between">
      <Images src="/images/casestudies/6.png" width={360} height={300} alt="img1"/>
      <Images src="/images/casestudies/7.png" width={360} height={300} alt="img1"/>
      <Images src="/images/casestudies/8.png" width={360} height={300} alt="img1"/>
      <Images src="/images/casestudies/9.png" width={360} height={300} alt="img1"/>
      <Images src="/images/casestudies/10.png" width={150} height={300} alt="img1"/>
    </div>
    </>
    
  );
};

export default Content;
