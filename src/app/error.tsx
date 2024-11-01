"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src={"/img/notfound.png"}
          alt={"notfound"}
          width={350}
          height={350}
          className="ml-10 mb-10"
        />
        <h2 className="text-3xl font-bold pb-5">Algo salio mal</h2>
        <Link className="text-venturaprimary font-bold text-xl" href="/">
          Regresar
        </Link>
      </div>
    </div>
  );
}
