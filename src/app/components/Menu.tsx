import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const showdex = localFont({
  src: "../fonts/Showdex.ttf",
  variable: "--font-geist-sans",
  weight: "100",
});

const Menu = () => {
  return (
    <nav>
      <ul className="flex justify-between px-10 py-5 bg-white items-center">
        <h1 className={`w-3/6 text-5xl ${showdex.className} text-red-500`}>
          Ventura
        </h1>
        <div className="flex w-2/6 justify-between font-bold text-2xl px-20">
          <li>
            <div className="cursor-pointer">Blog</div>
          </li>
          <li>
            <div className="cursor-pointer">Guias</div>
          </li>
          <li>
            <div className="cursor-pointer">Destinos</div>
          </li>
        </div>
        <div className="flex 1/6 justify-end">
          <Image
            src="https://i.pravatar.cc/500"
            width={50}
            height={50}
            alt="Avatar picture"
            className="rounded-full"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
