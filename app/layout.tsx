import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Ayubowan Anora",
  description: "Coming soon page for Ayubowan Anora",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white bg-brand-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
