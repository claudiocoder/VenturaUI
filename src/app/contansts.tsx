import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideNavItem } from "./types";
import {
  faBook,
  faEarthAmerica,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FontAwesomeIcon icon={faReadme} />,
  },
  {
    title: "Guias",
    path: "/destinos",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    title: "Destinos",
    path: "/destinos",
    icon: <FontAwesomeIcon icon={faEarthAmerica} />,
  },
];

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

export const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};
