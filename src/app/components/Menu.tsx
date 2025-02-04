"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import MenuMobile from "./MenuMobile";
import UserLogin from "./UserLogin";

const showdex = localFont({
  src: "../fonts/Showdex.ttf",
  variable: "--font-geist-sans",
  weight: "100",
});

const Menu = () => {
  return (
    <nav>
      <div className="flex justify-between px-14 py-5 bg-white items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="Cabala Viajera"
              width={50}
              height={50}
              className="mr-5"
            />

            <h1
              className={`w-50 text-5xl ${showdex.className} text-venturaprimary`}
            >
              Cabala Viajera
            </h1>
          </div>
        </Link>
        <MenuMobile />
        <ul className="justify-between w-50 font-bold text-2xl hidden md:flex">
          <li>
            <UserLogin />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
