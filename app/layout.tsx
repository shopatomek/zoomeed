import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Zoomeed",
  description: "Zoomeed educational",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
