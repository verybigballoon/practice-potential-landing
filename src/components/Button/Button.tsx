import React, { ButtonHTMLAttributes } from "react";

enum ButtonColor {
  primaryYellow = "yellow",
  primaryGreen = "green",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = ButtonColor.primaryYellow,
  ...buttonProps
}) => {
  const colorVariants = {
    green: "bg-primary-forest-green text-primary-white",
    yellow: "bg-primary-yellow text-primary-forest-green",
  };

  return (
    <div className="flex justify-center">
      <button
        {...buttonProps}
        className={`font-medium ${colorVariants[color]}
        } flex items-center rounded-md py-3 px-6`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
