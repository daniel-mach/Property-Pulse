import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse",
  description: "Find the best properties",
  keywords: "property, rental"
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col justify-between">
        <Navbar className="h-10" />
        <main className="h10 mb-auto">{children}</main>
        <Footer className="h-10" />
      </body>
    </html>
  );
};

export default MainLayout;
