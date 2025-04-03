import Images from "@/components/ui/Images/Images";
import React from "react";

const Contents = () => {
  return (
    <div className="flex justify-center " style={{ marginTop: "var(--margin-top-lg)" }}>
      <div>
        <Images
          src="/images/audiences/aud1.png"
          width={1250}
          height={300}
          alt="img"
        />
        <div className="flex justify-between">
        <Images
          src="/images/audiences/1.png"
          width={400}
          height={300}
          alt="img"
        />
        <Images
          src="/images/audiences/2.png"
          width={400}
          height={300} 
          alt="img"
        />
        <Images
          src="/images/audiences/3.png"
          width={400}
          height={300}
          alt="img"
        />
      </div>
      </div>

      
    </div>
  );
};

export default Contents;
