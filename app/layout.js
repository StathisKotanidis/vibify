import "./globals.css";

export const metadata = {
  title: "Vibify",
  description: "Create the perfect music playlist based on your current mood!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
