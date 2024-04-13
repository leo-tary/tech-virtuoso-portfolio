import {
  htmlImg,
  jsImg,
  reactImg,
  tailwindImg,
  nextImg,
  nodeImg,
  graphImg,
  githubImg,
} from "../assets";
import {
  arrayDestructImg,
  installNodeImg,
  navbarImg,
  reactParallaxImg,
  reactWeatherImg,
  reactSmoothImg,
} from "../assets/portfolio/";
const experience = [
  {
    id: 1,
    image: htmlImg,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    image: jsImg,
    title: "Javascript",
    style: "shadow-yellow-500",
  },
  {
    id: 3,
    image: tailwindImg,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 4,
    image: reactImg,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    image: nextImg,
    title: "Next Js",
    style: "shadow-white",
  },
  {
    id: 6,
    image: nodeImg,
    title: "Node Js",
    style: "shadow-green-500",
  },
  {
    id: 7,
    image: githubImg,
    title: "Github",
    style: "shadow-gray-500",
  },
  {
    id: 8,
    image: graphImg,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
];

const portfolios = [
  {
    id: 1,
    image: arrayDestructImg,
  },
  {
    id: 2,
    image: installNodeImg,
  },
  {
    id: 3,
    image: navbarImg,
  },
  {
    id: 4,
    image: reactParallaxImg,
  },
  {
    id: 5,
    image: reactWeatherImg,
  },
  {
    id: 6,
    image: reactSmoothImg,
  },
];

const links = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "portfolio",
  },
  {
    id: 3,
    name: "expertise",
  },
  {
    id: 4,
    name: "about",
  },
];
export { experience, portfolios, links };
