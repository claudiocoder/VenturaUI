import {
  faFacebook,
  faGithub,
  faInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-venturaprimary text-white px-5 py-5">
      <div className="flex justify-between items-end">
        <div className="flex flex-col w-50">
          <h4 className="mb-2 font-bold text-lg">Mapa del sitio</h4>
          <ul className="cursor-pointer">
            <li>Contacto</li>
            <li>Blog</li>
            <li>Guias</li>
            <li>Destinos</li>
          </ul>
        </div>
        <div className="w-50 flex flex-col items-end">
          <div className="mb-2">Siguenos en nuestras redes sociales</div>
          <div className="cursor-pointer text-xl">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faSquareXTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
