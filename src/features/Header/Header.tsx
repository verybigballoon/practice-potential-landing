import React from "react";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import LogoWithText from "../../components/Icons/LogoWithText";
import Navbar from "../../components/NavBar/NavBar";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-primary-white text-primary-forest-green">
      <Navbar logo={<LogoWithText className="max-w-64" logoColor="green" />}>
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

      {/* <div className="container mx-auto py-4 px-6 flex justify-between flex-wrap">
        <div>
          <LogoWithText className="max-w-64" logoColor="green" />
        </div>
        <div className="flex-1 flex flex-wrap justify-end content-center"></div>
      </div> */}
    </header>
  );
};

export default Header;
