import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-10 text-center md:text-start">
        Mensaje del creador
      </h3>
      <div className="flex flex-col md:flex-row w-full items-center">
        <div className="flex flex-col items-start text-center mb-10 md:mb-0">
          <Image
            src={"/img/users/autor.jpg"}
            alt={"autor"}
            width={150}
            height={150}
            className="rounded-full shadow-2xl mb-5"
          />
          <p className="font-bold text-center w-full">Claudio Moreno</p>
        </div>
        <div className="w-full md:px-10 text-justify">
          <span className="font-bold">Hola, mi nombre es Claudio</span>
          <br />
          <div className="my-1">
            Soy desarrollador de software y viajero mochilero. Eh visitado 8
            paises y 20 ciudades alrededor del mundo en tres años y escribo este
            blog para compartir mis experiencias y poder ayudar a otros viajeros
            con las dudas que yo tenia cuando planeaba mis viajes.
            <br /> Me gusta cumplir mis sueños viajando y escuchar a otros
            compartir sus aventuras alrededor del mundo. Espero pueda animarte a
            descubrir tu próximo destino. Si tienes alguna historia que te
            gustaría compartir con los demás viajeros, no dudes en contactarme.
          </div>
          <br />
          <span className="italic text-gray-500">
            Mi objetivo viajero es darle la vuelta al mundo en 6 meses y conocer
            todos los estadios de baseball de la MLB.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
