// Make sure that the file names match exactly, including case
import Html from "../assets/Html.png";
import Css from "../assets/css.jpg";
import React from "../assets/react.png"; // Changed `react` to `React`
import Mysql from "../assets/mysql.png";
import Automation from "../assets/Automation.jpg";
import Web from "../assets/web.png";
import Rpa from "../assets/Rpa.png";

// Define service objects
const services = [
  {
    title: "Web Developer",
    icon: Web,
  },
  {
    title: "RPA",
    icon: Rpa,
  },
  {
    title: "React",
    icon: React, // Updated to match the import name
  },
];

// Define technology objects
const technology = [
  {
    name: "HTML 5",
    icon: Html,
  },
  {
    name: "CSS3",
    icon: Css,
  },
  {
    name: "React",
    icon: React,
  },
  {
    name: "MySQL",
    icon: Mysql,
  },
  {
    name: "Automation Anywhere",
    icon: Automation,
  },
];

// Define project objects
const projects = [
  {
    name: "Free Hold",
    description:
      "Website made using Angular and TypeScript for buying and renting real estate, styled and made responsive.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "Free Hold",
    description:
      "Website made using Angular and TypeScript for buying and renting real estate, styled and made responsive.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
  },
];

export { services, technology, projects };
