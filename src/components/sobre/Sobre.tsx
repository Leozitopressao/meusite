import React from 'react'

import Image from "next/image";
import "../../../src/app/globals.css";
import perfil from "../../../public/image/perfil.png"

const Sobre = () => {
	return (
		<div className="p-8 my-3">

			<h1 className="mb-10 text-2xl text-center font-extrabold text-white md:text-2xl lg:text-4xl"><span className="text-transparent bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text">Descubra Mais</span> Sobre Mim</h1>
			<div className="p-6 sm:p-12 bg-gray-900 text-gray-100 rounded-2xl">
				<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
					<Image
						src={perfil}
						width={500}
						height={500}
						alt='imagem'
						className="self-center flex-shrink-0 w-40 h-40 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
					/>
					<div className="flex flex-col">
						<h4 className="text-4xl font-semibold text-center md:text-left">Leonardo Silva</h4>
						<p className="dark:text-gray-400 text-md sm:text-xl m-4 text-center">Comecei desde novo a gostar dessa arte. Há qual venho me especializando, pois vi que por meio dela me encontrei, ajudando pessoas guarda momentos para sempre aqueles que jamais poderá se repetir.</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Sobre