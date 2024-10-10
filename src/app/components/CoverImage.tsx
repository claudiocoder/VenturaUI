import React from "react";
import Image from "next/image";
import styles from "../css/coverImage.module.css";

const { heroWrapper, imageWrapper, heroContent } = styles;

const CoverImage = () => {
  return (
    <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          className="z-[-1]"
          priority
          src={"/img/cover.jpg"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        <h1 className="text-3xl md:text-6xl text-white text-center [text-shadow:_0px_1px_4px_#d7d7d7]">
          Descubre tu próxima aventura
        </h1>
        <p className="text-base md:text-2xl text-white text-center py-2 md:py-5">
          Guias para mochileros y viajeros frecuentes
        </p>
      </div>
    </div>
  );
};

export default CoverImage;
