import Footer from '@/components/Footer';
import TypeW from '@/components/TypeW';
import Image from 'next/image'
import Link from 'next/link'
import { PiTreeStructure,PiDesktopTowerBold,PiFileTextBold,PiChalkboardBold} from "react-icons/pi";
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
                  className=" text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Git Hub
                </a>
                <a
                  href="https://www.linkedin.com/in/umang-sailor/"
                  className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
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
      <section className="mt-48 md:mt-40 pb-40 relative bg-green-50">
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
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
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
                      <p className="mb-4 text-blueGray-500">
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
                      <p className="mb-4 text-blueGray-500">
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
                      <p className="mb-4 text-blueGray-500">
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
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                You can contact me on any Social media website, Linked in & Git hub.
                You can aslo mail me on <br/>umangsailor@hotmail.com<br/> or fill the contact form I'll contact you by given information
              </p>
              <div className="sm:block flex flex-col mt-10">
                 <a
                  href="mailto: umangsailor@hotmail.com"
                  target="_blank"
                  className=" text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-400 active:bg-gray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Mail
                </a>
                <a
                  href="tel:+919998558554"
                  className="sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Call</span>
                </a> 
              </div> 
               <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer/>
    </main>
  )
}
