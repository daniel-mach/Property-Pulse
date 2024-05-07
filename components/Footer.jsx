import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-24 bg-gray-200 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Logo Icon" className="h-8 w-auto" />
          </div>
          <div>
            <p className="mt-2 text-sm text-gray-500 md:mt-0">
              &copy; {currentYear} PropertyPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
