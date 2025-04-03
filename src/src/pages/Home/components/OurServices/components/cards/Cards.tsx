import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="flex justify-center  " style={{ marginTop: "var(--margin-top-lg)" }}>
      <div>
        {/* First Row */}

        <div className="flex gap-5">
          <Image
            src="/images/ourservice/1.png"
            alt="Ethnocultural Strategy"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/2.png"
            alt="Diverse Audience Planning"
            width={630}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/3.png"
            alt="Creative Development"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Second Row */}
        <div className="flex gap-5 mt-5">
          <Image
            src="/images/ourservice/4.png"
            alt="Multi-lingual Transcreation"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/5.png"
            alt="Campaign Trafficking & Optimization"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/6.png"
            alt="Media Planning & Buying"
            width={620}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Third Row */}
        <div className="flex gap-5 mt-5">
          <Image
            src="/images/ourservice/7.png"
            alt="Data Driven Analytics & Insights"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/8.png"
            alt="Multicultural PR"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/9.png"
            alt="Influencer Marketing"
            width={300}
            height={600}
            className="object-contain"
          />

          <Image
            src="/images/ourservice/10.png"
            alt="Production"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
