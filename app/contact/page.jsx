import Image from 'next/image'
import React from 'react'
import { AiFillGithub,AiFillFacebook,AiOutlineWhatsApp,AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai";


function Contact() {
  return (
    <>
    <div className="relative bg-green-300 md:pt-32 -mt-2 pb-32 pt-12">
      {/* block */}
      </div>
    <div className="flex max-w-7xl -mt-52 pt-10 flex-wrap mx-auto pb-48">



        <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
        <div className="rounded-t bg-white mb-0 px-14 py-5">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-600 uppercase text-3xl font-semibold">Contact Me</h6> 
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            
            <div className="flex flex-wrap mt-5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-300 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Umang Sailor' required
                    /> 
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-300 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='umangsailor@hotmail.com' required
                    />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-300 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Colabrate with you' required
                    />
              </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    >
                    Detail
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-300 text-gray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="8"
                    required
                    placeholder='Hey I want To colarabrate with you on any Next.js project '
                    ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <button className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg p-8 bg-green-50 border-0">        
        <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14876.689800341675!2d72.77946530537108!3d21.225009164083545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzEzLjQiTiA3MsKwNDYnNDkuMyJF!5e0!3m2!1sgu!2sin!4v1695572227814!5m2!1sgu!2sin"  height="550" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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