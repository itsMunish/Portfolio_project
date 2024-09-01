import React from "react";
import { GrLinkedinOption } from "react-icons/gr";

function Footer() {
  return (
    <div>
      <div className="w-[screen] bg-black">
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href="http://172.168.1.5:3000"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px]  rounded-full flex justify-center items-center bg-violet-400">
              <GrLinkedinOption className="text-white"></GrLinkedinOption>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]"> My Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
