import React from 'react'
import Image from "next/image";
import "../../../src/app/globals.css";
import logo from "../../../../../public/image/camera.png"
import imagem1 from '../../../../../public/image/1.jpeg'
import banner from "../../../public/image/banner.png"
import promo from "../../../../../public/image/promoção1.jpeg"
import { BsInstagram, BsWhatsapp, BsThreads } from "react-icons/bs";


const Header = () => {
  return (
    <div className="relative">
      <video
        autoPlay width="1280" height="720" muted loop
        src="https://github.com/GylleadhePT-BR/Leoimg/raw/main/public/video/video2.mp4"
        className="absolute inset-0 object-cover w-full h-full"

      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
               Registrando Momentos 📷 <br className="hidden md:block" />{' '}
                <span className="text-transparent bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text">Inesquecíveis!</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
              Comigo você irá eternizar seus melhores momentos e dias , Festas de 15 anos , Noivados , Aniversário , e eventos dos quais você queira guardar em suas mãos
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                <a href="https://www.instagram.com/leo_ls_photos?igsh=dThoMTRwemZvYWRo" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700  rounded-full bg-gray-800 text-white hover:bg-gray-700" role="alert">
                  <span className="text-xs bg-primary-800 rounded-full text-amber-400 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Veja agora A promoção deste mês 🎉</span>
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-6/12 rounded-xl">
              <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-800  shadow-2xl p-7 sm:p-10 rounded-xl">
                <Image
                  src={banner}
                  width={300}
                  height={300}
                  alt='logo'
                  className='m-auto p-8'
                />
<h1 className="mb-10 text-xl text-center font-extrabold text-white md:text-2xl lg:text-2xl"><span className="text-transparent bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text">Me siga!</span> E vamos negociar</h1>
                <section className='flex flex-wrap justify-center items-center space-x-4  my-10'>
                  
                  <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-md px-3 py-2 text-center me-2 mb-2 flex justify-center items-center text-1xl"> <BsInstagram className='mr-3' /> <a href="https://www.instagram.com/leo_ls_photos?igsh=dThoMTRwemZvYWRo">Instagram</a></button>
                  <button className="text-white bg-gradient-to-r from-slate-900 to-slate-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-md px-3 py-2 text-center me-2 mb-2 flex justify-center items-center text-1xl"> <BsThreads className='mr-3' /> <a href="https://www.threads.net/@leo_ls_photos">Threads</a></button>
                  <button className="text-white bg-gradient-to-r from-green-500 to-green-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-md px-3 py-2 text-center me-2 mb-2 flex justify-center items-center text-1xl"> <BsWhatsapp className='mr-3' />  <a href="https://wa.me/+558198260475">Whatsapp</a></button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
