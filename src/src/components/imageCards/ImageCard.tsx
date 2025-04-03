import Image from "next/image";
import React from "react";

interface ImageCardProps {
  image: string;
  width?: number;
  height?: number;
  title?: string;
  position?:
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "center"
    | "bottomCenter";
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  width = 300,
  height = 200,
  title = "",
  position = "bottomCenter",
}) => {
  const positionClasses: Record<string, string> = {
    topLeft: "top-2 left-2",
    topRight: "top-2 right-2",
    bottomLeft: "bottom-2 left-2",
    bottomRight: "bottom-2 right-2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    bottomCenter: "bottom-2 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden border"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={image}
        alt={title || "Image"}
        className="object-fill"
        width={width}
        height={height}
      />
      {title && (
        <div
          className={`absolute text-white text-lg font-bold bg-opacity-50 rounded ${
            positionClasses[position] || "bottomLeft"
          }`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default ImageCard;