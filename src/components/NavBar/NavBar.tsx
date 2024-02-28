import React, { ReactNode, useState } from "react";
import { PiPlusCircle } from "react-icons/pi";

interface NavbarProps {
  logo: ReactNode;
  children: ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, logo, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-white">
      <div className={`w-full mx-auto py-4 ${className}`}>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">{logo}</div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-10">{children}</ul>
          </div>

          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex items-center justify-center p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div>
                <PiPlusCircle
                  className={`${
                    isOpen && "rotate-45"
                  } transition-transform ease-in duration-150`}
                  size={50}
                  color="primary-forest-green"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "top-24 opacity-100" : "-top-full opacity-0"
        } md:hidden transition-all ease-in duration-150 fixed w-full -z-10 bg-primary-white px-0`}
        id="mobile-menu"
      >
        <div
          className={`*:justify-center pt-2 pb-3 space-y-1 sm:px-3 *:px-3 *:py-2 ${className}`}
        >
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
