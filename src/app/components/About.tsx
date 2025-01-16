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
            className="rounded-full shadow-xl mb-5"
          />
          <p className="font-bold text-center w-full">Claudio Moreno</p>
        </div>
        <div className="w-full md:px-10 text-justify">
          <span className="font-bold">Hola, mi nombre es Claudio</span>
          <br />
          <div className="my-1">
            Soy desarrollador de software y viajero mochilero. He visitado 8
            países y 20 ciudades alrededor del mundo en tres años. Escribo este
            blog para compartir mis experiencias y ayudar a otros viajeros con
            las dudas que yo tenía cuando planeaba mis viajes. Espero que este
            blog te inspire y te ayude a descubrir tu próximo destino. Si tienes
            alguna historia que te gustaría compartir con otros viajeros, no
            dudes en contactarme. ¡Buen viaje!
          </div>
          <br />
          <span className="italic text-gray-500">
            Cábala viajera: &quot;Tomar foto al pasaporte antes de subir al
            avión y escuchar Infinity Repeating de The Voidz&quot;
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
