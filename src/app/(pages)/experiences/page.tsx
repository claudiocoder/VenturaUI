import React from "react";
import Backpacker from "../../components/Backpacker";

const Experiences = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col w-full justify-center items-center ">
        <h2 className="text-3xl font-bold">Conoce a viajeros como tú</h2>
        <div className="flex">
          <Backpacker
            src="/img/users/autor.jpg"
            alt="ClaudioM"
            className="rounded-full shadow-xl w-[150px]"
            slug="/backpack"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
