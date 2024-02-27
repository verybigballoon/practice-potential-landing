import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "yellow";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = "green",
  ...buttonProps
}) => {
  const colorVariants = {
    green: "bg-primary-forest-green text-primary-white hover:bg-secondary-teal",
    yellow:
      "bg-primary-yellow text-primary-forest-green hover:bg-secondary-yellow",
  };

  return (
    <div className="flex justify-center">
      <button
        {...buttonProps}
        className={`${colorVariants[color]}
        } inline text-center min-w-32 rounded-xl py-3 px-6  ${className}`}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
