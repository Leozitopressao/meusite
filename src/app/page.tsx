import Image from "next/image";
import Hero from "../components/Header/Header";
import Galeria from "../components/galeria/Galeria"
import Sobre from "../components/sobre/Sobre"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-700">
      <Hero />
      <Sobre />
      <Galeria />
      <Footer />

    </div>

  );
}
