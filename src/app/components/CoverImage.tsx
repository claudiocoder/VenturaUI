import React from "react";
import Image from "next/image";
import styles from "../css/coverImage.module.css";

const { heroWrapper, imageWrapper, heroContent } = styles;

interface CoverImageProps {
  heigth?: number | string;
  width?: number | string;
  thumbnailUrl?: string;
  title?: string;
  subtitle?: string;
  imgposition?: string;
  className?: string;
}

const CoverImage = (props: CoverImageProps) => {
  const {
    heigth,
    thumbnailUrl = "/img/cover.jpg",
    imgposition = "center 25%",
    width: width = "100%",
  } = props;
  return (
    <div
      className={heroWrapper}
      style={{ height: `${heigth}`, width: `${width}` }}
    >
      <div className={imageWrapper}>
        <Image
          className="z-[-1]"
          priority
          src={thumbnailUrl}
          fill={true}
          style={{ objectFit: "cover", objectPosition: `${imgposition}` }}
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        {props.title && (
          <h1 className="text-4xl md:text-6xl text-white text-center [text-shadow:_0px_1px_2px_#d7d7d7]">
            {props.title}
          </h1>
        )}
        {props.subtitle && (
          <p className="text-base md:text-2xl text-white text-center py-2 md:py-5">
            {props.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default CoverImage;
