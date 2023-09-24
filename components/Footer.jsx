import Link from "next/link";
import React from "react";
import { AiFillGithub,AiFillFacebook,AiOutlineWhatsApp,AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-green-50 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-green-50 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-green-600">
                Find me on any of these platforms, I respond 1-2 days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
              <button
                  type="button" className=" bg-white h-10 w-10 shadow-lg font-normal  items-center  align-center rounded-full outline-none focus:outline-none mr-2"
                  ><a href="https://twitter.com/UmangSailor" target="_blank">
                  <AiOutlineTwitter
                  className=" text-blue-400 m-auto" size={25}
                   /></a>
                </button>
                <button
                  type="button"
                  className=" bg-white h-10 w-10 shadow-lg font-normal  items-center  align-center rounded-full outline-none focus:outline-none mr-2"

                  >
                    <a href="https://www.facebook.com/umang.sailor.6/" target="_blank">
                  <AiFillFacebook
                    className=" text-blue-600 m-auto" size={25}
                  /></a>
                </button>
                <button
                  type="button"
                  className=" bg-white h-10 w-10 shadow-lg font-normal  items-center  align-center rounded-full outline-none focus:outline-none mr-2"
                  ><a href="https://api.whatsapp.com/send?phone=919998558554" target="_blank">
                  <AiOutlineWhatsApp
                    className="e text-green-600 m-auto" size={25}
                  /></a>
                </button>
                <button
                  type="button"
                  className=" bg-white h-10 w-10 shadow-lg font-normal  items-center  align-center rounded-full outline-none focus:outline-none mr-2"
                  ><a href="https://github.com/TuathaDeLugh" target="_blank">
                  <AiFillGithub
                    className=" text-gray-800 m-auto " size={25}
                  /></a>
                </button>
                <button
                  type="button"
                  className=" bg-white h-10 w-10 shadow-lg font-normal  items-center  align-center rounded-full outline-none focus:outline-none mr-2"
                  ><a href="https://www.linkedin.com/in/umang-sailor/" target="_blank">
                  <AiFillLinkedin
                    className=" text-blue-800 m-auto " size={25}
                  /></a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-green-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/project"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/1H1AHVZqOmi0K-q9Yz3tEWtvNU4KkHXkN/view?usp=sharing"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-green-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} potfolio website by Umang Sailor.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
