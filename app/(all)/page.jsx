import TypeW from '@/components/TypeW';
import Link from 'next/link'
import { PiTreeStructure,PiDesktopTowerBold,PiFileTextBold,PiChalkboardBold} from "react-icons/pi";
import { AiOutlineVerticalLeft,AiOutlineExperiment } from "react-icons/ai";
export default function Home() {
  return (
    <main>
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
            <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
            
            <h2 className="font-semibold text-2xl md:text-4xl text-slate-700">
            I'm  <label className='text-green-600'>Umang Sailor </label> 
              </h2>
            
              <h2 className="font-semibold text-xl md:text-4xl text-slate-900">
                <TypeW/>
              </h2>
              <p className=" md:text-lg leading-relaxed ">
              Skilled web developer, proficient in HTML, CSS, JavaScript, and web technologies. Focus is on creating user-friendly and innovative websites, and try to stay updated with industry trends.
              </p>
              <div className="mt-6 md:mt-12">
                <a
                  href="https://github.com/TuathaDeLugh/"
                  target="_blank"
                  className=" text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-400 active:bg-gray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Git Hub
                </a>
                <a
                  href="https://www.linkedin.com/in/umang-sailor/"
                  className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-700 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Linked In 
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12  sm:mt-0 w-10/12 max-h-860-px"
          src="/man.gif"
          alt="..."
        />
      </section>
      <section className="mt-48 md:mt-40 pb-20 relative bg-green-50">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  />
                  <h4 className="text-xl font-bold text-white">
                    Great awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Whether it's front-end finesse or back-end wizardry, I tackle challenges head-on and deliver results. I'm constantly learning and adapting to the fast-paced world of web development, ensuring my creations are always at the forefront of innovation. Collaborative by nature, I thrive on transforming ideas into interactive, pixel-perfect realities.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i><PiChalkboardBold size={25}/></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Web Design
                      </h6>
                      <p className="mb-4 ">
                        Design beutiful UI & UX, with responsive wabpages that changes by mobile & desktop viewport, powered by javascript
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i><PiDesktopTowerBold size={25}/></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Dynamic Full Stack website
                      </h6>
                      <p className="mb-4 text-gray-500">
                          Whole website data can be changed & managed by admin panal with powerful database like MongoDB,Firebase & SQL 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i><PiTreeStructure size={25}/></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">API</h6>
                      <p className="mb-4 text-gray-500">
                        powerful backend that perform Create , Update , Delete, Read & other oprations. Use with any frontend framework
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i><PiFileTextBold size={25}/></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-gray-500">
                        If need , provide full fleded SRS with all important diagrams like ER , Use Case , Activity, DFD etc. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* complex data */}
      <selection>
      <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl">
                  <Link href={"/admin"}>
                  <AiOutlineExperiment size={25}/>
                  </Link>
                  </i>
                </div>
                <h3 className="text-3xl font-semibold">
                Here are some important points
                </h3>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                          <AiOutlineVerticalLeft size={15}/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                        Web Technologies: Work with various web technologies, frameworks, and libraries to streamline development, enhance functionality, and improve performance.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <AiOutlineVerticalLeft size={15}/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                        Responsive Design: Ensure that websites are responsive, adapting seamlessly to different screen sizes and devices, including desktops, tablets, and smartphones.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <AiOutlineVerticalLeft size={15}/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                        Cross-Browser Compatibility: test websites on multiple web browsers to ensure consistent functionality and appearance across different platforms.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <AiOutlineVerticalLeft size={15}/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                        Web Security:  implementing security measures to protect websites from vulnerabilities, hacking, and data breaches.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <AiOutlineVerticalLeft size={15}/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                        Optimization: optimize websites for speed and performance, aiming for fast loading times and smooth user interactions.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..." width={640} height={480}
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="code.png"
              />
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24 pb-40">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Glance of project</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              All project avaliable on github
            </p>
          </div>
        </div>
      </selection>
      {/* Project look */}
      <section className="block relative bg-green-100 pb-40" >
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Let's Travel
                  </h5>
                  <Link href="/project">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..." width={640} height={480}
                        className="align-middle border-none h-64 max-w-full  rounded-lg object-cover"
                        src="/travel.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Spirited Score
                  </h5>
                  <Link href="/project">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..." width={640} height={480}
                        className="align-middle border-none max-w-full h-64 object-cover rounded-lg"
                        src="/SpiritedScore.png"
                      />
                    </div>
                  </Link>
                </div>


                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Life Saver
                  </h5>
                  <Link href="/project">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..." width={640} height={480}
                        className="align-middle border-none max-w-full h-64 rounded-lg object-cover"
                        src="/lifesaver.png"
                      />
                    </div>
                  </Link>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="pb-16 bg-green-50 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center text-white bg-green-500 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Wana Work With Me?
              </h3>
              <p className="text-gray-100 text-lg leading-relaxed mt-4 mb-4">
                You can contact me on any Social media website, Linked in & Git hub.
                You can aslo mail me on <br/>contact@umangsailor.com<br/> or fill the contact form I'll contact you by given information
              </p>
              <div className="sm:block flex flex-col mt-10">
                 <a
                  href="mailto: contact@umangsailor.com"
                  target="_blank"
                  className=" text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-green-200 active:bg-green-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Mail
                </a>
                <a
                  href="tel:+919998558554"
                  className="sm:ml-1 text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-200 active:bg-green-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Call</span>
                </a> 
              </div> 
            </div>
          </div>
        </div>

      </section>
      
    </main>
  )
}
