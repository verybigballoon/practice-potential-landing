import React from "react";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-white text-primary-forest-green">
      <div className="container mx-auto py-4 px-6 flex justify-between">
        <h1 className="text-2xl font-bold">Logo Here</h1>
        <div className="flex-1 flex justify-end content-center">
          <Link href="" className="font-bold mr-8">
            About
          </Link>
          <Link href="" className="font-bold mr-8">
            Courses
          </Link>
          <Button className="font-bold" color={"green"}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
