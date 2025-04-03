import React from "react";

interface ButtonProps {
  onClick?: () => void;
  width?: string; 
  height?: string; 
  children?: React.ReactNode; 
  backgroundColor?: string; 
  border?: string; 
  borderRadius?: string; 
  textColor?: string;
  textHover?:string
  fontSize?: string;
  padding?: string;
  fontWeight?: string;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  width = "w-32",
  height = "h-12",
  children,
  backgroundColor , 
  border , 
  borderRadius = "rounded-full", 
  textColor = "text-white",
  textHover="text-primary",
  fontSize = "text-lg",
  padding = "px-3 py-1",
  fontWeight = "font-normal",
  disabled = false, 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} 
      className={`cursor-pointer transition-colors flex justify-center items-center hover:${textHover}  ${width} ${height} ${backgroundColor} ${border} ${borderRadius} ${textColor} ${fontSize} ${padding} ${fontWeight} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`} 
    >
      {children}
    </button>
  );
};

export default Button;
