import React from "react";

interface MapsProps {
  width?: string;
  height?: string;
  className?: string;
  src?: string;
}
const Maps = (props: MapsProps) => {
  const { className, width, height, src } = props;
  if (!src) {
    return null;
  }
  return (
    <div className={`${className}`}>
      <iframe
        className="rounded-lg"
        src={props.src}
        width={width || "100%"}
        height={height || "auto"}
      ></iframe>
    </div>
  );
};

export default Maps;
