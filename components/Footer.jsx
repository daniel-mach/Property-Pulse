import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-gray-300 bg-gray-100 py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Logo Icon"
            className="h-8 w-auto"
            priority="priorty"
          />
        </div>
        <div>
          <p className="mt-2 text-sm text-gray-700 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
