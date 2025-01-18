import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/app/_components/Footer";
import Sidebar from "@/app/_components/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vibify",
  description: "Create the perfect music playlist based on your current mood!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col h-screen`}>
        <div className="flex h-[90%]">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
