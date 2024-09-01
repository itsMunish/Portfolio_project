import React from "react";
import { Styles } from "../uitls/Style";
import contact from "../assets/contact.png";

function Contact() {
  return (
    <div>
      <div className="flex flex-row items-start pl-5 pt-3" id="Contact">
        <span className={Styles.sectionHeadText}>Contacts</span>
        <hr className="w-[35%]" />
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-around">
          <div className="lg:w-[40%]">
            <form className="m-5 flex flex-col gap-3" action="">
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="What is your name?"
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="What is your email?"
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="text"
                  placeholder="What do you want to say?"
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:w-[50%]">
            <img className="w-full" src={contact} alt="Contact illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
