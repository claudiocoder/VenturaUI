import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Fotter from "./components/Fotter";
import Menu from "./components/Menu";
import "./globals.css";
config.autoAddCss = false;

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cabala Viajera",
  description:
    "This project is a comprehensive resource for backpackers who are passionate about exploring the world on a budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div className="w-full">
          <Menu />
          <div className="min-h-screen">{children}</div>
          <Fotter />
        </div>
      </body>
    </html>
  );
}
