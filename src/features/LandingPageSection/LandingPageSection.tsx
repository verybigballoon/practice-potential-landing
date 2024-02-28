import React from "react";

interface LandingPageSectionProps {
  children: React.ReactNode;
  backgroundColor?: "green" | "white";
  className?: string;
}

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  children,
  backgroundColor = "white",
  className,
}) => {
  const colorVariants = {
    green: "bg-primary-forest-green text-primary-white",
    white: "bg-primary-white text-primary-forest-green",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${colorVariants[backgroundColor]} ${className}`}
    >
      {children}
    </div>
  );
};

export default LandingPageSection;
