import Navber from "@/components/navber/Navber";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Limamia",
  description: "Generated by md Omar faruk chowdhury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto min-h-screen flex flex-col justify-between p-4">
          <Navber />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
