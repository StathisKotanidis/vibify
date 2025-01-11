import "@/app/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vibify",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex `}>{children}</body>
    </html>
  );
}
