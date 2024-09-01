import React from "react";
import profile from "../assets/profile.jpg";
import { Styles } from "../uitls/Style";
import Resume from "../assets/Resume.pdf";
import { TiArrowDownOutline } from "react-icons/ti";
import "../App.css";
function About() {
  return (
    <div
      className="flex flex-row justify-between item-center mt-10 p-10"
      id="Home"
    >
      <div className=" flex-1 py-4 text-left">
        <span className={Styles.heroHeadText}>
          Hi I'm <span className="text-orange-600">Munish</span>
          <br />
          <span className={Styles.heroSubText}>
            I am a Mren Stack Developer &
            <br />
            Web Designer
          </span>
        </span>
        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-4 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500">
              <TiArrowDownOutline className="text-lg mr-3 text-orange-500" />{" "}
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src={profile}
          alt="profile"
          className="element object-contain p-4"
        />
      </div>
    </div>
  );
}

export default About;
