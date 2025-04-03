import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

const Images: React.FC<ImageCardProps> = ({ src, alt, onClick, className, width, height }) => {
  return (
    <div
      className={`flex-shrink-0 cursor-pointer rounded-2xl p-2 ${className}`}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width || 500} 
          height={height || 500} 
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Images;