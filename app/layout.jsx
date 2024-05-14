import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, property, find rentals, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="flex h-screen flex-col justify-between">
          <Navbar className="h-10" />
          <main className="h10 mb-auto">{children}</main>
          <Footer className="h-10" />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
