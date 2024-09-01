import React from "react";
import Tilt from "react-parallax-tilt";
import { services, technology } from "../constants";
import { Styles } from "../uitls/Style";
import "./Style.css";

// import { motion } from "framer-motion";

function Overview() {
  return (
    <div>
      <div
        className="flex-row item-center pl-5 justify-center pt-3 "
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="e-[35%]"></hr>
        <div className={Styles.sectionText}>
          A web developer is a programmer who develops World Wide Web
          applications using a client–server model. The applications typically
          use HTML, CSS, and JavaScript in the client, and any general-purpose
          programming language in the server.
        </div>
      </div>
      <div className=" flex flex-wrap justify-center">
        {services.map((service) => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-[100px] w-[100px]"
                />
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {technology.map((technologies) => (
          <div
            key={technologies.name}
            className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px]  border-violet-400 
          hover:shadow-orange-300"
          >
            <img
              src={technologies.icon}
              alt={technologies.name}
              className="p-2"
            />
            <div className="text-violet-600 justify-center flex">
              {technologies.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
