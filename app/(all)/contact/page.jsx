import ContactPage from '@/components/InsertForm/ContactPage';
import React from 'react'
import { AiFillGithub,AiOutlineWhatsApp,AiFillLinkedin } from "react-icons/ai";


function Contact() {
  return (
    <>
    <div className="relative bg-green-300 md:pt-32 -mt-2 pb-32 pt-12">
      {/* block */}
      </div>
    <div className="flex max-w-7xl -mt-52 pt-10 flex-wrap mx-auto pb-48">



        <div className="w-full lg:w-8/12 px-4">
          <ContactPage/>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg p-8 bg-green-50 border-0">        
        <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14876.689800341675!2d72.77946530537108!3d21.225009164083545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzEzLjQiTiA3MsKwNDYnNDkuMyJF!5e0!3m2!1sgu!2sin!4v1695572227814!5m2!1sgu!2sin"  height="550" loading="lazy" ></iframe>
        </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
        <div className="relative px-6 flex flex-col min-w-0 break-words bg-green-50 w-full mb-6 shadow-xl rounded-lg mt-28">
          <div className="text-center my-12">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
              Stay Updated
            </h3>
            
            <div className="my-10">
            Web development encompasses a wide range of skills and knowledge areas, making it a dynamic and multifaceted field that requires continuous learning and adaptation to meet evolving industry demands.
              
            </div>
            
          </div>          
          
        </div>
        <div className="relative px-6 flex flex-col min-w-0 break-words bg-green-50 w-full mb-6 shadow-xl rounded-lg mt-2">
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
              Umang Sailor
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2  font-bold uppercase">
              Surat, Gujarat , India
            </div>
            <div className="mb-2  mt-10">
              Full Stack Developer
              
            </div>
            <div className="mb-2">
              +91 99985 58554
            </div>
            <div className="mb-2">
              umangsailor@hotmail.com
            </div>
          </div>
          
          {/* Buttons */}
          <div className="mt-10 py-10 border-t text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-5 text-lg leading-relaxed">
                  You Can Contact Me
                  </p>
                <div className="lg:mb-0 mb-4 text-lg leading-relaxed ">
                <a
                  href="mailto: umangsailor@hotmail.com"
                  target="_blank"
                  className=" text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-green-300 active:bg-green-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Mail
                </a>
                <a
                  href="tel:+919998558554"
                  className="sm:ml-1 text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-300 active:bg-green-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Call</span>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className=" py-10 border-t text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-1 text-lg leading-relaxed">
                  Social Media
                  </p>
                <div className="lg:mb-0 mb-4 text-lg leading-relaxed ">
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
            </div>
          </div>
        </div>
      </div>
      
        </div>
      
                    </>
  )
}

export default Contact