import "@/app/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Vibify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
