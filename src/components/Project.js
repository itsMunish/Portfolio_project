import React from "react";
import Tilt from "react-parallax-tilt";

import { Styles } from "../uitls/Style";
import { projects } from "../constants/index";
import { SiGithub } from "react-icons/si";
function Project() {
  return (
    <div>
      <div
        className="flex-row item-center pl-5 justify-center pt-3 "
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="e-[35%]"></hr>
        <div className={Styles.sectionText}>
          Following project showcase my skills and experiance through real-world
          example of my work.
        </div>
      </div>
      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map((project) => (
          <Tilt
            key={project.name}
            className="w-[300px] h-[500px] flex-col flex justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl"
          >
            <div>
              <div className="flex justify-center items-center mb-3">
                <div
                  className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                    flex justify-center items-center"
                >
                  <a href={project.source_code_link} target="blank">
                    <SiGithub className="text-3xl  font-bold text-violet-600"></SiGithub>
                  </a>
                </div>
                <img src={project.image} alt={project.name} srcset="" />
                <div className="text-2xl text-violet-600 font-extrabold">
                  {project.name}
                </div>
              </div>
              <div className="text-center">
                <span className="text-orange-500">{project.description}</span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
export default Project;
