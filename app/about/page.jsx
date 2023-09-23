import Link from 'next/link'
import React from 'react'
import { BsFillDatabaseFill,BsFillShieldLockFill,BsSearch,BsFingerprint } from "react-icons/bs";
import { GrContactInfo, GrTechnology,GrCertificate } from "react-icons/gr";

function About() {
  return (
    <div>
        <div className="relative pt-32 pb-48 flex content-center items-center justify-center min-h-[65vh]">
          <div
            className="absolute top-0 w-full h-full bg-center -mt-2 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    I'm Full Stack developer
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                  Web developers can specialize in either front-end development, which focuses on the user interface and user experience, or back-end development, which deals with server-side processes and databases. Full-stack developers are proficient in both.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </div>
        <section className="pb-20 bg-green-50 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <BsFillDatabaseFill size={25}/>
                    </div>
                    <h6 className="text-xl font-semibold">Database Management</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                     Can work with databases to store, retrieve, and manipulate data. Knowledge of database systems like MySQL, SQL Server & non SQL database like MongoDB Firebase
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400 ">
                      <BsSearch size={25} />
                    </div>
                    <h6 className="text-xl font-semibold">Web Analytics & SEO</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                    Familiar with tools like Google Analytics to track website traffic, user behavior, and make data-driven decisions.Have also understanding of SEO principles to enhance a website's visibility on search engines.
                    
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400 ">
                    <BsFillShieldLockFill size={25}/>
                    </div>
                    <h6 className="text-xl font-semibold">Cybersecurity</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                    Understanding security best practices,have knowledge of SSL/TLS encryption, secure authentication, and protection against common web vulnerabilities like SQL injection and cross-site scripting (XSS).


                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="mt-[10%] w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/photo.png"
                />
              </div>
              <div className=" w-full mt-6 md:w-5/12 mx-auto px-4">
                <div className="md:pr-12">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <GrContactInfo size={25}/>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        </section>
        <section className="relative pt-10 pb-44">
          <div
            className=" bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
<div className="flex flex-wrap max-w-7xl mx-auto items-center ">
      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
      <div>
      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
        <GrTechnology size={25}/>
        </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Technology I use
        </h3>
                        </div>
        <div className="justify-center flex flex-wrap relative">
          
          <div className="my-4 w-full lg:w-6/12 px-4">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  Svelte
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-blue-400 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  ReactJS
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-gray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  NextJS
                </p>
              </div>
            </a>
          </div>
          <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  JavaScript
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  Angular
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
              target="_blank"
            >
              <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  Vue.js
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <GrCertificate size={25}/>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Javascript Components
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
          In order to create a great User Experience some components
          require JavaScript. In this way you can manipulate the elements
          on the page and give more options to your users.
        </p>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
          We created a set of Components that are dynamic and come to help
          you.
        </p>
        <div className="block pb-6">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Alerts
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Dropdowns
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Menus
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Modals
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Navbars
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Popovers
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Tabs
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Tooltips
          </span>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
          target="_blank"
          className="font-bold text-gray-700 hover:text-gray-500 ease-linear transition-all duration-150"
        >
          View all{" "}
          <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
        </a>
      </div>
    </div>
</section>
    </div>
  )
}

export default About