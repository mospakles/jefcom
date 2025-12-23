import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jefcom Integrated Systems Ltd | Electrical Engineering Services",
  description:
    "Leading electrical and allied service institution in Nigeria, delivering unequaled value-adding experience through EPC projects in electrical engineering.",
  keywords:
    "electrical engineering, EPC projects, Nigeria, automation, solar energy, control panels, CCTV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
