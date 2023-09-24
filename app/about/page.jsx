import Link from 'next/link'
import React from 'react'
import { BsFillDatabaseFill, BsFillShieldLockFill, BsSearch } from "react-icons/bs";
import { GrContactInfo, GrTechnology, GrCertificate,GrCpu } from "react-icons/gr";

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
                    <BsFillDatabaseFill size={25} />
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
                    <BsFillShieldLockFill size={25} />
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
                    <GrContactInfo size={25} />
                  </div>
                  <h3 className="text-3xl font-semibold">PROFESSIONAL SUMMARY</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    A highly motivated Web Developer with 5+ years of experience. Proven ability to develop and manage projects from conception to completion. Possessing an excellent knowledge of
                    HTML, CSS, JavaScript and PHP. Achieved success in developing
                    high-performance web applications with an emphasis on us-
                    ability and scalability. Committed to creating visually appeal-
                    ing sites that feature user-friendly design and clear navigation.
                    Adept with content management systems such as WordPress,
                    Joomla and Drupal. ProQcient in creating custom templates
                    for popular CMS frameworks. Highly skilled in database de-
                    sign and development using MySqL, mongo Db,Qrebase and
                    Oracle. Demonstrated ability to collaborate eXectively with
                    cross-functional teams to deliver uality results. Possessing
                    strong interpersonal skills and a passion for staying up-to-date
                    with the latest trends in web development technologies.
                  </p>
                  
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
            <div className='px-8 md:px-4'>
              <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <GrTechnology size={25} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Technology I use
              </h3>
            </div>
            <div className="justify-center flex flex-wrap relative">

              <div className="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                >
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://img.icons8.com/color/48/html-5--v1.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      HTML
                    </p>
                  </div>
                </a>
                <a
                  href="https://legacy.reactjs.org/docs/getting-started.html"
                  target="_blank"
                >
                  <div className="bg-blue-400 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                  </div>
                </a>
                <a
                  href="https://nextjs.org/docs"
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
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://img.icons8.com/color/48/javascript--v1.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                >
                  <div className="bg-slate-400 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://img.icons8.com/color/48/express-js.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Express.js
                    </p>
                  </div>
                </a>
                <a
                  href="https://nodejs.org/en/docs"
                  target="_blank"
                >
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://img.icons8.com/color/48/nodejs.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Node.js
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <GrCertificate size={25} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Edjucation
            </h3>

            <div>
            <p className="text-lg font-light leading-relaxed mt-4 mb-2 text-gray-600">
            <h5 className="text-xl font-semibold">
              10th
            </h5>
            </p>
            <p className="text-lg font-light leading-relaxed  text-gray-600">
              D.R.Rana School, Surat(GSEB)
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-600">
              Percentile Rank : 89.80
            </p>
            </div>

            <div>
            <p className="text-lg font-light leading-relaxed mt-4 mb-2 text-gray-600">
            <h5 className="text-xl font-semibold">
              Diploma in Information Technology
            </h5>
            </p>
            <p className="text-lg font-light leading-relaxed  text-gray-600">
              Tapi Diploma Engineering Collage,Surat(GTU)
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-600">
            CGPA : 8.35
            </p>
            </div>
            <div className="block pt-6 pb-6">
            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb- shadow-lg rounded-full bg-white">
                <GrCpu size={25} />
              </div>
            <h6 className="text-3xl font-semibold leading-relaxed mt-4 mb-4">All skills</h6>
              {/* LOOP */}
              
              <span className="text-xs inline-block py-1 px-2  rounded-full text-white bg-green-400 uppercase last:mr-0 mr-2 mt-2">
                Html
              </span>
              <span className="text-xs inline-block py-1 px-2  rounded-full text-white bg-green-400 uppercase last:mr-0 mr-2 mt-2">
                CSS
              </span>
              <span className="text-xs inline-block py-1 px-2  rounded-full text-white bg-green-400 uppercase last:mr-0 mr-2 mt-2">
                javascript
              </span>
              {/* End loop */}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default About