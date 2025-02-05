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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative py-4 flex items-center justify-center min-h-screen  w-screen xl:justify-end xl:pr-[3rem]`}
      >
        {children}
      </body>
    </html>
  );
}
