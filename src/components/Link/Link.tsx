import React from "react";

interface LinkProps {
  href: string;
  className?: string;
  color?: "green" | "yellow";
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  className,
  color = "green",
  children,
}) => {
  const colorVariants = {
    green: "text-primary-forest-green hover:text-secondary-teal",
    yellow: "text-primary-yellow hover:text-secondary-yellow",
  };
  return (
    <div className="flex content-center flex-wrap">
      <a href={href} className={`${colorVariants[color]} ${className}`}>
        {children}
      </a>
    </div>
  );
};
export default Link;
