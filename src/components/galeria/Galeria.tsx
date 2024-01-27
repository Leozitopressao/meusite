
import Image from "next/image";
import "../../../src/app/globals.css";

import React from 'react'

const Galeria = () => {
  return (
    <div>
        <div>
        <h1 className="mb-10 text-2xl text-center font-extrabold text-white md:text-2xl lg:text-4xl"><span className="text-transparent bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text">Veja mais!</span> Sobre muitos projetos</h1>
    </div>




    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
    <div className="grid gap-4">
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/11.jpeg?raw=true" alt=""/>
/        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/2.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/3.jpeg?raw=true" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/4.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/5.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/6.jpeg?raw=true" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/7.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/8.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/9.jpeg?raw=true" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/10.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/12.jpeg?raw=true" alt=""/>
        </div>
        <div>
            <img className="h-full max-w-full rounded-lg" src="https://github.com/GylleadhePT-BR/Leoimg/blob/main/public/image/13.jpeg?raw=true" alt=""/>
        </div>
    </div></div>


    </div>
    


  )
}

export default Galeria