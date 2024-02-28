import React from "react";
import Link from "../../components/Link/Link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className="bg-primary-forest-green py-8">
      <div className={`mx-auto ${className}`}>
        <div className="flex flex-col font-semibold text-primary-white max-w-md text-left mb-10">
          <p className="mb-3">
            "Learning is the process whereby knowledge is created through the
            transformation of experience."
          </p>
          <p>- David A. Kolb</p>
        </div>
        <div className="flex-1 flex justify-end content-center font-light">
          <span className="mr-8">
            © {`${new Date().getFullYear()}`} Practice and Potential
          </span>
          <Link href="" color="yellow" className="font-light mr-8">
            Terms of Use
          </Link>
          <Link href="" color="yellow" className="font-light">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
