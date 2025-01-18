"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuMobile from "./MenuMobile";

const showdex = localFont({
  src: "../fonts/Showdex.ttf",
  variable: "--font-geist-sans",
  weight: "100",
});

const Menu = () => {
  const { user } = useUser();
  const pathname = usePathname();
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
            <div className="cursor-pointer">
              {!user ? (
                pathname !== "/login" ? (
                  <button className="bg-venturaprimary px-8 py-2 radius rounded-lg text-white text-xl">
                    <Link href="/login">Iniciar sesión</Link>
                  </button>
                ) : null
              ) : (
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden border-2 border-venturaprimary">
                    <Image
                      src={user.imageUrl}
                      alt={user.username || "profileImageurl"}
                      width={50}
                      height={50}
                    />
                  </div>
                  <SignOutButton>
                    <button className="bg-venturaprimary px-8 py-2 radius rounded-lg text-white text-xl">
                      Salir
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
