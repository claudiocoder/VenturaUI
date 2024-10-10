import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Menu from "./components/Menu";
config.autoAddCss = false;

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ventura Blog",
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
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
