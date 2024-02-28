import React from "react";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import LogoWithText from "../../components/Icons/LogoWithText";
import Navbar from "../../components/NavBar/NavBar";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full bg-primary-white text-primary-forest-green`}
    >
      <Navbar
        className={`text-lg ${className}`}
        logo={<LogoWithText className="max-w-56" logoColor="green" />}
      >
        <Link href="" className="font-semibold">
          About
        </Link>
        <Link href="" className="font-semibold">
          Courses
        </Link>
        <Button className="font-semibold" color="green">
          Sign Up
        </Button>
      </Navbar>
    </header>
  );
};

export default Header;
