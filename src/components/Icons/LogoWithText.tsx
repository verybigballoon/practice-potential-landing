import React from "react";
import Logo from "./Logo";
import LogoText from "./LogoText";

interface TextProps {
  className?: string;
  logoColor: "green" | "yellow" | "white";
}

const Text: React.FC<TextProps> = ({ logoColor, className }) => {
  return (
    <div className={`${className} flex align-center items-center flex-nowrap`}>
      <Logo fillColor={logoColor} className="w-1/4 mr-3" />
      <LogoText
        fillColor={logoColor == "yellow" ? "white" : logoColor}
        className="w-3/4"
      />
    </div>
  );
};

export default Text;
