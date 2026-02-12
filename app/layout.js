import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { agdasima, freeSans } from "./fonts";

export const metadata = {
  title: "iAverse",
  description: "Digital Twin | Simulation | Industrial Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${agdasima.variable} ${freeSans.variable}`}>
      <body className="min-h-screen bg-white text-black font-agdasima">
        
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

