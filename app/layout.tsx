import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Zoomeed",
  description: "Zoomeed educational",
};

const font = Nunito({
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
