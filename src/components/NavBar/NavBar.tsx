import React, { ReactNode, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

interface NavbarProps {
  logo: ReactNode;
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-white">
      <div className="w-full mx-auto py-4 px-4 sm:px-16 lg:px-40">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">{logo}</div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8">{children}</ul>
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
                {isOpen ? (
                  <IoClose size={40} color="primary-forest-green" />
                ) : (
                  <IoMenu size={40} color="primary-forest-green" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="*:justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3 *:px-3 *:py-2">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
