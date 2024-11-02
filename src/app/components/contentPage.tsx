"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogModel } from "../models/Blog";
import Maps from "./Maps";
import SocialMediaScripts from "./SocialMediaScript";
import SocialMediaShare from "./SocialMediaShare";

interface ContentPageProps {
  meta: BlogModel;
  content: React.ReactElement;
}

const ContentPage = (props: ContentPageProps) => {
  const { meta, content } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-start w-full px-[10%] py-10">
        <div className="flex flex-col h-auto">
          <Link href="/">
            <div className="mb-5 flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-venturaprimary"
              />
              <div className="text-venturaprimary font-bold text-2xl pl-2">
                Regresar
              </div>
            </div>
          </Link>
          <Maps
            src={meta.urlMap}
            className="w-full mb-10 shadow-md"
            height="480"
          />
        </div>
        <div className="md:px-10 w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">{meta.title}</h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
            <div className="flex items-center">
              <Image
                src={"/img/users/autor.jpg"}
                alt={"autor"}
                width={40}
                height={40}
                className="rounded-full mr-2 shadow-xl"
              />
              <p className="italic">Por {meta.author}</p>
            </div>
            <div>
              <p className="italic font-bold">
                {format(parseISO(meta.date as string), "MMMM dd, yyyy", {
                  locale: es,
                })}
              </p>
            </div>
          </div>
          <SocialMediaShare />
          <div>{content}</div>
          <SocialMediaScripts />
        </div>
      </div>
    </motion.div>
  );
};

export default ContentPage;
